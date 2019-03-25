import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserRepository from '../../repositories/UserRepository';
import UserEventRepository from '../../repositories/UserEventRepository';

router.post('/', async (req: Request, res: Response) => {
    try {
        const user: IUser = await UserRepository.create(req.body);
        res.send(user);
    }
    catch(e) {
        res.send(e);
    }
});

router.get('/:userId', async (req: Request, res: Response) => {
    try {
        let { userId } = req.params;
        const user = await UserRepository.get(userId);

        res.send(user);
    }
    catch(e) {
        res.send(e);
    }
});

router.post('/:userId/events', async (req: Request, res: Response) => {
    try {
        let { userId } = req.params;

        const userEvent = await UserEventRepository.create({
            user: userId,
            type: req.body.type,
        });

        res.send(userEvent);
    }
    catch(e) {
        res.send(e);
    }
});

router.get('/:userId/events', async (req: Request, res: Response) => {
    try {
        let { userId } = req.params;

        const events = await UserEventRepository.getAll({userId});
        res.send(events);
    }
    catch(e) {
        res.send(e);
    }
});

export const UsersController: Router = router;
