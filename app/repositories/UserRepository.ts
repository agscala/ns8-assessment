import { IUser, User } from '../models/User';

class UserRepository {
    constructor() {

    }

    public async create (userDetails: IUser) : Promise<IUser> {
        const user = new User(userDetails);
        await user.save();

        return user;
    }
}

export default new UserRepository();
