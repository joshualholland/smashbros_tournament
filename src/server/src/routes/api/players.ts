import { Router } from 'express';
import DB from '../../db';
import { RequestHandler } from 'express-serve-static-core';

let router = Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        res.sendStatus(401)
    } else {
        return next();
    }
}

router.get('/:id?', async (req, res) => {
    let id = req.params.id
    if (id) {
        try {
            let [player] = await DB.Players.getPlayer(id)
            res.send(player)
        } catch (e) {
            console.log(e)
        }
    } else {
        try {
            let players = await DB.Players.getPlayers();
            res.send(players)
        } catch (e) {
            console.log(e)
        }
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    let id = req.params.id
    try {
        await DB.Players.deletePlayer(id)
        res.json({ message: 'Player deleted' })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
});

router.put('/:id', async (req, res) => {
    let id = req.params.id
    let user = req.body
    try {
        // let placeHolderColumns = Object.keys(user).map(key => [`${key}="${user[key]}"`]);
        // let updatePlayer = placeHolderColumns.join(', ');
        let columns = Object.keys(user);
        let values = Object['values'](user);
        await DB.Players.editPlayer(columns, values, id);
        res.json({ message: 'Player Updated' })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

});

export default router;