import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserRepository from '../../repositories/UserRepository';
import UserEventRepository from '../../repositories/UserEventRepository';

router.post('/', async (req: Request, res: Response) => {
    const user: IUser = await UserRepository.create({ name: req.body.name, password: req.body.password});
    res.send(user);
});

router.get('/', async (req: Request, res: Response) => {
    let { userId } = req.params;
    const user = await UserEventRepository.getAll();

    res.send(user);
});

router.post('/:userId/events', async (req: Request, res: Response) => {
    let { userId } = req.params;

    const userEvent = await UserEventRepository.create({
        user: userId,
        type: req.body.type,
    });

    res.send(userEvent);
});

export const UserEventsController: Router = router;
