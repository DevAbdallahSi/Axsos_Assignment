import { Category } from '../schemas/book.schema';
import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsEnum,
    IsEmpty,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

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

    @IsEmpty({ message: 'you cannot pass user id' })
    readonly user: User;
}
