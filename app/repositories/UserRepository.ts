import { IUser, User } from '../models/User';

class UserRepository {
    constructor() {

    }

    public async create (userDetails: IUser) : Promise<IUser> {
        const user = new User(userDetails);
        await user.save();

        return user;
    }

    public async get (id: String) : Promise<IUser | null> {
        const user = await User.findById(id).exec();
        return user;
    }
}

export default new UserRepository();
