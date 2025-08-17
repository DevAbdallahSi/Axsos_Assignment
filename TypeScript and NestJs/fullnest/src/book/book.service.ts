import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Query } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ) {}

    async findAll(query: Query): Promise<Book[]> {
        const resPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        const Keyword = query.Keyword
            ? {
                title: {
                    $regex: query.Keyword,
                    $options: 'i',
                }
            } : {};
        const books = await this.bookModel.find({ ...Keyword }).limit(resPerPage).skip(skip);
        return books;
    }

    async create(book: Book, user: User): Promise<Book> {
        const data = Object.assign(book, { user: user._id });
        const newBook = await this.bookModel.create(data);
        return newBook;
    }

    async findById(id: string): Promise<Book | null> {
        const isValid = mongoose.isValidObjectId(id);
        if (!isValid) {
            throw new BadRequestException('Invalid book ID');
        }
        const book = await this.bookModel.findById(id);

        if (!book) {
            throw new NotFoundException('Book not found');
        }
        return book;
    }
    async updateById(id: string, book: Book): Promise<Book | null> {
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id: string): Promise<Book | null> {
        return await this.bookModel.findByIdAndDelete(id);
    }
}