import { model, Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

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
        unique: true,
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

UserSchema.pre("save", async function (this: IUserDocument, next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

export const User = model<IUserDocument>('User', UserSchema);
