import { IUserEvent, UserEvent } from '../models/UserEvent';

class UserEventRepository {
    constructor() {

    }

    public async create (event: IUserEvent) : Promise<IUserEvent> {
        const userEvent = new UserEvent(event);
        await userEvent.save();

        return userEvent;
    }
}

export default new UserEventRepository();
