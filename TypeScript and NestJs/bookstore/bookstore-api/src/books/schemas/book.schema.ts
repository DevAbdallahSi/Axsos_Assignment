import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

export enum Category {
    FICTION = 'Fiction',
    NON_FICTION = 'Non-Fiction',
    SCIENCE = 'Science',
    HISTORY = 'History',
}

@Schema({ timestamps: true })
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop()
    description?: string;

    @Prop({ required: true, min: 0 })
    price: number;

    // Owner/creator
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: Types.ObjectId;

    @Prop({ type: String, enum: Category, required: true })
    category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
