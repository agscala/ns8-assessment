import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserRepository from '../../repositories/UserRepository';
import UserEventRepository from '../../repositories/UserEventRepository';

router.get('/', async (req: Request, res: Response) => {
    let { dateStart, dateEnd, userId } = req.query;
    const events = await UserEventRepository.getAll({ dateStart, dateEnd, userId });

    res.send(events);
});

export const UserEventsController: Router = router;
