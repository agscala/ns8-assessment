import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserRepository from '../../repositories/UserRepository';

router.get('/', async (req: Request, res: Response) => {
    const user: IUser = await UserRepository.create({ name: "Andrew Scala", password: "password" });
    res.send(user);
});

router.get('/:userId', async (req: Request, res: Response) => {
    let { userId } = req.params;
    const user = await UserRepository.get(userId);

    res.send(user);
});

router.post('/:userId/events', async (req: Request, res: Response) => {
});

router.get('/:userId/events', async (req: Request, res: Response) => {
});

export const UsersController: Router = router;
