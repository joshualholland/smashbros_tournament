import { Router } from 'express';
import authRouter from './auth';
import apiRouter from './api';
import twilioRouter from './twilio';

let router = Router();

router.use('/auth', authRouter);
router.use('/api', apiRouter);
router.use('/sms', twilioRouter);

export default router;