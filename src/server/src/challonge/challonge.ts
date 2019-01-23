import * as challonge from 'challonge';
import * as dotenv from 'dotenv';

dotenv.config();

const client = challonge.createClient({
    apiKey: process.env.API_KEY
});

const createTournament = () => {
    return new Promise((resolve, reject) => {
        client.tournaments.create({
            tournament: {
                name: 'Smash Bros Tournament',
                url: 'new_smash_tournament',
                tournamentType: 'single elimination',
            }, callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        })
    });
};

const getTournament = () => {
    return new Promise((resolve, reject) => {
        client.tournaments.show({
            id: '5454332',
            callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data)
            }
        })
    })
};

const addParticipants = () => {
    return new Promise((resolve, reject) => {
        client.participants.create({
            id: '5454332',
            participants: [][name],
            callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        });
    });
};

const startTournament = () => {
    return new Promise((resolve, reject) => {
        client.tournaments.start({
            id: '5454332',
            callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        });
    });
};

const getMatches = () => {
    return new Promise((resolve, reject) => {
        client.matches.index({
            id: '5454332',
            callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        });
    });
};

const updateMatches = () => {
    return new Promise((resolve, reject) => {
        client.matches.update({
            id: '5454332',
            matchId: '146623580',
            match: {
                scoresCsv: '3-0,3-0',
                winnerId: '89443239'
            },
            callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        });
    });
};

const finalizeTournaments = () => {
    return new Promise((resolve, reject) => {
        client.tournaments.finalize({
            id: '5454332',
            callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        });
    });
};

export {
    createTournament,
    addParticipants,
    startTournament,
    finalizeTournaments,
    getMatches,
    updateMatches,
    getTournament
};


