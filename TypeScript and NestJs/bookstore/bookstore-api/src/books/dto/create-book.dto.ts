import { IsString, IsNotEmpty, IsNumber, Min, IsEnum, IsOptional, IsEmpty } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class CreateBookDto {
    @IsString() @IsNotEmpty()
    title: string;

    @IsString() @IsNotEmpty()
    author: string;

    @IsString() @IsOptional()
    description?: string;

    @IsNumber() @Min(0)
    price: number;

    @IsEnum(Category, { message: 'Category must be one of Fiction, Non-Fiction, Science, History' })
    category: Category;

    @IsEmpty({ message: 'Do not send user; it is set by the server.' })
    user?: unknown;
}
