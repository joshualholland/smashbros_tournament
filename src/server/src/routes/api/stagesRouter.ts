import { Router } from 'express';
import DB from '../../db';

let router = Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let starter = await DB.Starters.getStarter(id);
            res.send(starter);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    } else {
        try {
            let starter = await DB.Starters.getStarters();
            res.send(starter);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    }
});

export default router;