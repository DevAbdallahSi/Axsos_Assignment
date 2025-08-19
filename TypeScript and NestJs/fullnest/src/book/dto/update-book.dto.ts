import { Category } from '../schemas/book.schema';
import {
    IsString,
    IsNumber,
    IsEnum,
    IsOptional,
    IsEmpty,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class updateBookDto {
    @IsString()
    @IsOptional()
    readonly title: string;

    @IsString()
    @IsOptional()
    readonly author: string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsNumber()
    @IsOptional()
    readonly price: number;

    @IsEnum(Category, { message: 'Category must be a valid enum value' })
    @IsOptional()
    readonly category: Category;

    @IsEmpty({ message: 'youy canot pass user id' })
    readonly user: User;
}
