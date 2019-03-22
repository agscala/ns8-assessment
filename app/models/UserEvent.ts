import { model, Document, Schema } from 'mongoose';

export interface IUserEvent {
    type: string;
    user: Schema.Types.ObjectId;
    created?: Date;
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

UserEventSchema.pre("save", function (this: IUserEventDocument, next) {
    this.created = new Date();
    next();
});

export const UserEvent = model<IUserEventDocument>('UserEvent', UserEventSchema);
