import { model, Document, Schema } from 'mongoose';

export interface IUserEvent {
    name: string;
    password: string;
}

export interface IUserEventDocument extends IUserEvent, Document {
};

enum UserEventTypes {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

export const UserEventSchema = new Schema({
    type: String,
    created: Date,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
});

export const UserEvent = model<IUserEventDocument>('UserEvent', UserEventSchema);
