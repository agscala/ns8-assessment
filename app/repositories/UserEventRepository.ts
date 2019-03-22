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
        let query = UserEvent.find({})

        if (filter !== {}) {

            if (filter.userId !== null)
                query = query.find({user: filter.userId});

            if (filter.dateStart !== null)
                query = query.find({"created": {"$gte": filter.dateStart}});

            if (filter.dateEnd !== null)
                query = query.find({"created": {"$lt": filter.dateEnd}});

        }

        return await query.exec();
    }

    public async create (event: IUserEvent) : Promise<IUserEvent> {
        const userEvent = new UserEvent(event);
        await userEvent.save();

        return userEvent;
    }
}

export default new UserEventRepository();
