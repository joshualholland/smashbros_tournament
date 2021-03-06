import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import DB from '../db';
import { ComparePassword } from '../utils/security/passwords';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        let [user]: any = await DB.Players.findByEmail(email);
        if (user && ComparePassword(password, user.password)) {
            done(null, user)
        } else {
            done(null, false)
        }
    } catch (e) { console.log(e) }
}));

