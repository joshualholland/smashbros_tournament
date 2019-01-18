import { Connection } from './index';
import { number, object } from 'prop-types';


const getPlayers = async() => {
    let query = `SELECT * FROM players`;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

const getPlayer = async(id: number) => {
    let query = `SELECT * FROM players WHERE id = ${id};`
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

const addPlayer = async(player: IPlayer) => {
    let query = `INSERT INTO players(username) VALUE(?);`;
    
    let data = Object["values"](player) 
    console.log(data)
    return new Promise((resolve, reject) => {
        Connection.query(query, [data], (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

const deletePlayer = async(id: number) => {
    let query = `DELETE FROM players WHERE players.id = ${id};`;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

const editPlayer = async(username: string, id: any) => {
    console.log(username)
    console.log(id)
    let query = `UPDATE players SET username = '${username}' WHERE players.id=${id};`;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

interface IPlayer {
    player: {
        id: number,
        username: string
    }
};


export { getPlayer, getPlayers, addPlayer, deletePlayer, editPlayer };

