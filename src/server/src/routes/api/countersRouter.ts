import { Router }  from 'express';
import DB from '../../db';

let router = Router();

router.get('/', async (req, res) => {
    try {
        let counter = await DB.Counters.getCounters()
        res.send(counter)
    } catch (e) {
        console.log(e)
    }
});

export default router;