import { Router } from 'express';
import playerRouter from './players';
import avatarRouter from './avatarRouter';
import stagesRouter from './stagesRouter';

let router = Router();

router.use('/players', playerRouter);
router.use('/avatars', avatarRouter);
router.use('/stages', stagesRouter);

export default router;