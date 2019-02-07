import * as express from 'express';
import messageRouter from './message';

const router = express.Router();

router.use('/message', messageRouter);


export default router;