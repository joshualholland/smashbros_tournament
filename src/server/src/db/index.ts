import * as mysql from 'mysql';
import config from '../config';

import Avatars from './queries/avatar';
import Counters from './queries/counters';
import Players from './queries/player';
import Starters from './queries/starters';
import Tokens from './queries/accesstokens';

export const pool = mysql.createPool(config.mysql);


export const Query = (query: string, values?: any ) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if (err) reject(err);
            return resolve(results);
        });
    });
};

export default {
    Avatars,
    Counters,
    Players,
    Starters,
    Tokens
};
