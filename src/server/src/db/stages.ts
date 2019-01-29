import { Connection } from './index';

const getStages = () => {
    let query = `SELECT * FROM stages`;
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

const getStage = (id: string) => {
    let query = `SELECT * FROM stages WHERE id=${id}`
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

export { getStage, getStages };