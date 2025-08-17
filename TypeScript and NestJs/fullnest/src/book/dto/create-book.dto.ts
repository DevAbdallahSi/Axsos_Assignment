import { Category } from '../schemas/book.schema';
import { IsString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly author: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category, { message: 'Category must be a valid enum value' })
    readonly category: Category;
}
