import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../enums/role.enum';
@Schema({
    timestamps: true,
})
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({
        type: [{ type: String, enum: Role }],
        default: [Role.User],
    })
    role: Role[];
}
export const UserSchema = SchemaFactory.createForClass(User);