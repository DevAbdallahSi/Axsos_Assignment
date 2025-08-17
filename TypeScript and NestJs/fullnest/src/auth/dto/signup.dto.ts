import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from 'class-validator';

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty({message: 'Email is required'})
    readonly email: string;

    @IsString()
    @IsNotEmpty({message: 'Password is required'})
    @MinLength(8, {message: 'Password must be at least 8 characters long'})
    readonly password: string;

    @IsOptional()
    readonly role: string[]; // Default role for new users
}
