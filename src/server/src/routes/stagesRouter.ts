import { Router } from 'express';
import * as Stage from '../db/stages';

let router = Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let stage = await Stage.getStage(id);
            res.send(stage);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    } else {
        try {
            let stage = await Stage.getStages();
            res.send(stage);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    }
});

export default router;