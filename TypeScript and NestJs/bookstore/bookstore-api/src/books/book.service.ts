import { Injectable, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId, Types } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) { }

    // Public list with simple pagination & search
    async findAll(opts: { page?: number; limit?: number; q?: string }) {
        const page = Math.max(1, Number(opts.page) || 1);
        const limit = Math.min(50, Math.max(1, Number(opts.limit) || 10)); // safety caps
        const skip = (page - 1) * limit;

        const filter = opts.q
            ? { title: { $regex: String(opts.q), $options: 'i' } }
            : {};

        const [items, total] = await Promise.all([
            this.bookModel.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean().exec(),
            this.bookModel.countDocuments(filter).exec(),
        ]);

        return { items, total, page, limit, pages: Math.ceil(total / limit) };
    }

    // Public get by id
    async findById(id: string) {
        if (!isValidObjectId(id)) throw new BadRequestException('Invalid book id');
        const book = await this.bookModel.findById(id).lean().exec();
        if (!book) throw new NotFoundException('Book not found');
        return book;
    }

    // Create (owner = current user)
    async create(dto: CreateBookDto, userId: string) {
        const doc = await this.bookModel.create({
            ...dto,
            user: new Types.ObjectId(userId),
        });
        return doc.toObject();
    }

    // Update (only owner can update)
    async update(id: string, dto: UpdateBookDto, userId: string) {
        if (!isValidObjectId(id)) throw new BadRequestException('Invalid book id');
        const book = await this.bookModel.findById(id).exec();
        if (!book) throw new NotFoundException('Book not found');

        if (book.user.toString() !== userId) {
            throw new ForbiddenException('You do not own this book');
        }

        // Only update safe fields, never overwrite user
        if (dto.title !== undefined) book.title = dto.title;
        if (dto.author !== undefined) book.author = dto.author;
        if (dto.description !== undefined) book.description = dto.description;

        await book.save();
        return book.toObject();
    }

    // Delete (only owner can delete)
    async remove(id: string, userId: string) {
        if (!isValidObjectId(id)) throw new BadRequestException('Invalid book id');
        const book = await this.bookModel.findById(id).exec();
        if (!book) throw new NotFoundException('Book not found');

        if (book.user.toString() !== userId) {
            throw new ForbiddenException('You do not own this book');
        }

        await book.deleteOne();
        return { deleted: true };
    }
}
