import { Router } from 'express';
import { getPlayer, getPlayers, addPlayer, deletePlayer, editPlayer } from '../db/player';

let router = Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        getPlayer(id)
            .then(results => res.send(results))
            .catch(e => console.log(e))
    } else {
        getPlayers()
            .then(results => res.send(results))
            .catch(e => console.log(e))
    }
});

router.post('/', (req, res) => {
    addPlayer(req.body) 
        .then(results => res.send(results))
        .catch(e => console.log(e))
});

router.delete('/:id', (req, res) => {
    let id = req.params.id
    deletePlayer(id)
        .then(results => res.send(results))
        .catch(e => console.log(e))
});

router.put('/:id', (req, res) => {
    let id = req.params.id
    editPlayer(req.body.username, id)
        .then(results => res.send(results))
        .catch(e => console.log(e))
});

export default router;