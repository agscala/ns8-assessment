import { IUserEvent, UserEvent } from '../models/UserEvent';

class UserEventRepository {
    constructor() {

    }

    public async getByUser (userId: string) : Promise<Array<IUserEvent>> {
        const events = await UserEvent.find({user: userId}).exec();
        return events;
    }

    public async create (event: IUserEvent) : Promise<IUserEvent> {
        const userEvent = new UserEvent(event);
        await userEvent.save();

        return userEvent;
    }
}

export default new UserEventRepository();
