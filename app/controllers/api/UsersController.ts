import { IUser } from '../../models/User';
import { Router, Request, Response } from 'express';
const router: Router = Router();


router.get('/', async (req: Request, res: Response) => {
    res.send(`Hello, ${name}`);
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;

    res.send(`Hello, ${name}`);
});

export const UsersController: Router = router;
