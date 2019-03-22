import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserRepository from '../../repositories/UserRepository';

router.get('/', async (req: Request, res: Response) => {
    const user: IUser = await UserRepository.create({ name: "Andrew Scala", password: "password" });
    res.send(user);
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;

    res.send(`Hello, ${name}`);
});

export const UsersController: Router = router;
