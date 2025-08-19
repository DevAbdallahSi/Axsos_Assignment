import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';

import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User, UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>, // from UsersModule
        private jwt: JwtService,
    ) { }

    async signup({ name, email, password }: SignupDto) {
        // 1) ensure unique email
        const exists = await this.userModel.exists({ email });
        if (exists) throw new ConflictException('Email already in use');

        // 2) hash password
        const hash = await bcrypt.hash(password, 10);

        // 3) create user (roles default to ['user'] in schema)
        const user = await this.userModel.create({ name, email, password: hash });

        // 4) sign jwt
        const token = await this.jwt.signAsync({
            sub: user._id.toString(),
            roles: user.roles,
        });

        // 5) return safe payload
        return {
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                roles: user.roles,
            },
        };
    }

    async login({ email, password }: LoginDto) {
        // 1) find user
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) throw new UnauthorizedException('Invalid email or password');

        // 2) check password
        const ok = await bcrypt.compare(password, user.password);
        if (!ok) throw new UnauthorizedException('Invalid email or password');

        // 3) sign jwt
        const token = await this.jwt.signAsync({
            sub: user.id,
            roles: user.roles,
        });

        // 4) return safe payload
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                roles: user.roles,
            },
        };
    }
}
