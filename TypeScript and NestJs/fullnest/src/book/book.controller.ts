import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dts';
import type { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Role } from 'src/auth/enums/role.enum';
import { Throttle } from '@nestjs/throttler';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    // Method-level throttling (5 requests per 10 seconds)
    @Throttle({ default: { limit: 3, ttl: 60000 } })
    @Get()
    @Roles(Role.Moderator, Role.Admin)
    @UseGuards(AuthGuard(), RolesGuard)
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.findAll(query);
    }

    @Post('new')
    @UseGuards(AuthGuard())
    async createBook(@Body() book: CreateBookDto, @Req() req): Promise<Book> {
        return this.bookService.create(book, req.user);
    }

    @Get(':id')
    async getBookId(@Param('id') id: string): Promise<Book | null> {
        return this.bookService.findById(id);
    }

    @Put(':id')
    async updateBook(
        @Param('id') id: string,
        @Body() book: updateBookDto,
    ): Promise<Book | null> {
        return this.bookService.updateById(id, book);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string): Promise<Book | null> {
        return this.bookService.deleteById(id);
    }
}
