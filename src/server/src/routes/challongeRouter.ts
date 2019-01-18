import { Router } from 'express';
import { createTournament } from '../challonge/challonge';

let router = Router();

router.post('/', (req, res) => {
    createTournament()
        .then(results => {
            // insert tournament into my database
            res.send(results)
        })
        .catch(e => console.log(e))
});

export default router;