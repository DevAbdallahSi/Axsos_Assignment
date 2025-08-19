// src/auth/dto/signup.dto.ts
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    readonly password: string;
}
