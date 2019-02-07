import { Router } from 'express';
import DB from '../../db';

let router = Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let avatar = await DB.Avatars.getAvatar(id);
            res.send(avatar);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    } else {
        try {
            let avatars = await DB.Avatars.getAvatars();
            res.send(avatars);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    }
});

export default router;