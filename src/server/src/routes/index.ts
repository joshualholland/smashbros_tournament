import { Router } from 'express';
import playerRouter from './players';
import challongeRouter from './challongeRouter';
import avatarRouter from './avatarRouter';

let router = Router();

router.use('/players', playerRouter);
router.use('/challonge', challongeRouter);
router.use('/avatars', avatarRouter);

export default router;