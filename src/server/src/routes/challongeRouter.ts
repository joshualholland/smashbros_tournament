import { Router } from 'express';
import * as challonge from '../challonge/challonge';

let router = Router();

router.post('/participants/add', async (req, res, next) => {
    try {
        let results = await challonge.addParticipants();
        res.send(results);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});

router.post('/tournaments/start', async (req, res, next) => {
    try {
        let results = await challonge.startTournament();
        res.send(results);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});

router.post('/tournaments/create', (req, res) => {
    challonge.createTournament()
        .then(results => {
            // insert tournament into my database
            res.send(results)
        })
        .catch(e => console.log(e))
});

router.post('/tournaments/finalize', (req, res) => {
    challonge.finalizeTournaments()
        .then(results => {
            // insert tournament into my database
            res.send(results)
        })
        .catch(e => console.log(e))
});

router.get('/tournaments/show/matches', async (req, res, next) => {
    try {
        let results = await challonge.getMatches();
        res.send(results);
    } catch(e) {
        console.log(e);
        res.status(500);
    }
});

router.get('/tournaments', async (req, res, next) => {
    try {
        let results = await challonge.getTournament();
        res.send(results)
    } catch(e) {
        console.log(e);
        res.status(500)
    }
});

router.put('/tournaments/matches/update', async (req, res, next) => {
    try {
        let results = await challonge.updateMatches();
        res.send(results);
    } catch(e) {
        console.log(e);
        res.status(500);
    }
});

export default router;