import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpDto: SignupDto): Promise<{ token: string }> {
        const exists = await this.userModel.exists({ email: signUpDto.email });
        if (exists) {
            throw new UnauthorizedException('Email already in use');
        }
        const { name, email, password, role } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModel.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        const token = this.jwtService.sign({ id: newUser._id });
        return { token };
    }

    async login(loginDto: LoginDto): Promise<{ token: string }> {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const token = this.jwtService.sign({ id: user._id });
        return { token };
    }
}
