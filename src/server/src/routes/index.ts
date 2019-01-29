import { Router } from 'express';
import playerRouter from './players';
import avatarRouter from './avatarRouter';

let router = Router();

router.use('/players', playerRouter);
router.use('/avatars', avatarRouter);

export default router;