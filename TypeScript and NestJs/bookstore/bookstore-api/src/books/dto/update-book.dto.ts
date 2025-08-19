import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsEmpty, IsOptional } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsEmpty({ message: 'Do not send user; it is set by the server.' })
    @IsOptional()
    user?: unknown;
}
