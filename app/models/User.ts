import { model, Document, Schema } from 'mongoose';

export interface IUser {
    email: string;
    password: string;
    phone?: string;
}

export interface IUserDocument extends IUser, Document {
};

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    }
});

export const User = model<IUserDocument>('User', UserSchema);
