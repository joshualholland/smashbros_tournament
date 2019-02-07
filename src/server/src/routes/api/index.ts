import { Router } from 'express';
import * as passport from 'passport';

import playerRouter from './players';
import avatarRouter from './avatarRouter';
import starterRouter from './stagesRouter';
import countersRouter from './countersRouter';

let router = Router();

router.use('/avatars', avatarRouter);
router.use('/starter', starterRouter);
router.use('/counters', countersRouter);

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
})

router.use('/players', playerRouter);



export default router;