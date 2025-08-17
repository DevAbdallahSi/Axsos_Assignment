import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsNotEmpty({message: 'Email is required'})
    readonly email: string;

    @IsString()
    @IsNotEmpty({message: 'Password is required'})
    @MinLength(8, {message: 'Password must be at least 8 characters long'})
    readonly password: string;
}
