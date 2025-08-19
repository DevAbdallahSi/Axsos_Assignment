import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { BooksService } from './book.service';
import { BooksController } from './book.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
    providers: [BooksService],
    controllers: [BooksController],
})
export class BooksModule { }
