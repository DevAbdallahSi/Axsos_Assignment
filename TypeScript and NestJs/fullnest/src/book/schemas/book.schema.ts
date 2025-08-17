import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import * as Mongoose from 'mongoose';

export enum Category {
    FICTION = 'Fiction',
    NON_FICTION = 'Non-Fiction',
    SCIENCE = 'Science',
    HISTORY = 'History',
}

@Schema({
    timestamps: true,
})
export class Book {
    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop({ type: Mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop()
    category: Category;
}
export const BookSchema = SchemaFactory.createForClass(Book);