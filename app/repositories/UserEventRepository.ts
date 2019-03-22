import { IUserEvent, UserEvent } from '../models/UserEvent';

export interface IUserEventFilter {
    dateStart?: Date;
    dateEnd?: Date;
    userId?: String;
};

class UserEventRepository {
    constructor() {
    }


    public async getAll(filter: IUserEventFilter = {}) : Promise<Array<IUserEvent>> {
        let query: any = {}

        if (filter !== {}) {

            if (filter.userId)
                query.user = filter.userId;

            if (filter.dateStart) {
                query.created = query.created || {};
                query.created["$gte"] = filter.dateStart;
            }

            if (filter.dateEnd) {
                query.created = query.created || {};
                query.created["$lt"] = filter.dateEnd;
            }

        }

        return await UserEvent.find(query).exec();
    }

    public async create (event: IUserEvent) : Promise<IUserEvent> {
        const userEvent = new UserEvent(event);
        await userEvent.save();

        return userEvent;
    }
}

export default new UserEventRepository();
