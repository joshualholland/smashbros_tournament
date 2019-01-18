import { Router } from 'express';
import playerRouter from './players';
import challongeRouter from './challongeRouter';

let router = Router();

router.use('/players', playerRouter);
router.use('/challonge', challongeRouter);

export default router;