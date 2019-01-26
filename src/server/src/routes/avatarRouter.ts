import { Router } from 'express';
import * as Avatar from '../db/avatar';

let router = Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let avatar = await Avatar.getAvatar(id);
            res.send(avatar);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    } else {
        try {
            let avatars = await Avatar.getAvatars();
            res.send(avatars);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    }
});

export default router;