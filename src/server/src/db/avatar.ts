import { Connection } from './index';

const getAvatars = () => {
    let query = `SELECT * FROM avatars`;
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

const getAvatar = (id: string) => {
    let query = `SELECT * FROM avatars WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        Connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results[0])
            }
        })
    })
};

export {
    getAvatars,
    getAvatar
};