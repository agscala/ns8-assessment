import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserRepository from '../../repositories/UserRepository';

router.get('/', async (req: Request, res: Response) => {
    const user: IUser = await UserRepository.create({ name: "Andrew Scala", password: "password" });
    res.send(user);
});

router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    const user = await UserRepository.get(id);

    res.send(user);
});

export const UsersController: Router = router;
