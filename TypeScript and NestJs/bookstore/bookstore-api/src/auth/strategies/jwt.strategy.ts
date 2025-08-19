import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../users/schemas/user.schema';

type JwtPayload = {
  sub: string;       // user id
  roles: string[];   // roles from the token
  iat?: number;
  exp?: number;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // provided via ConfigModule
    });
  }

  async validate(payload: JwtPayload) {
    // Called after token signature & expiry are verified
    const user = await this.userModel.findById(payload.sub).exec();
    if (!user) throw new UnauthorizedException('User not found');
    // Whatever you return is attached to req.user
    return user;
  }
}
