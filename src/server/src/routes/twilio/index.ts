import * as express from 'express';
import messageRouter from './message';
import * as passport from 'passport';

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
})

router.use('/message', messageRouter);


export default router;