import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import twilio from 'twilio';
import config from '../../config';

const router = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        res.sendStatus(401)
    } else {
        return next();
    }
};

router.post('/', isAdmin, async (req, res,) => {
    let client = twilio(config.twilio.TWILIO_ACCOUNT_SID, config.twilio.TWILIO_AUTH_TOKEN)
    try {
        res.header('Content-Type', 'application/json');
        client.messages.create({
            to: req.body.to,
            from: config.twilio.TWILIO_PHONE_NUMBER,
            body: req.body.body
        });
    } catch (e) {
        console.log(e)
        res.sendStatus(401)
    }
});

export default router;
