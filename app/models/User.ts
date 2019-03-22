import { model, Document, Schema } from 'mongoose';

export interface IUser {
    name: string;
    password: string;
    phoneNumber?: string;
}

export interface IUserDocument extends IUser, Document {
};

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false,
    }
});

export const User = model<IUserDocument>('User', UserSchema);
