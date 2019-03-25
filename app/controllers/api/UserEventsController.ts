import { Router, Request, Response } from 'express';
const router: Router = Router();

import UserEventRepository from '../../repositories/UserEventRepository';

router.get('/', async (req: Request, res: Response) => {
    try {
        let { dateStart, dateEnd, userId } = req.query;
        const events = await UserEventRepository.getAll({ dateStart, dateEnd, userId });

        res.send(events);
    }
    catch(e) {
        res.send(e);
    }
});

export const UserEventsController: Router = router;
