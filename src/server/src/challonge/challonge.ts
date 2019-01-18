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
                url: 'new_smash_tournament1232131',
                tournamentType: 'single elimination',
            }, callback: (err: any, data: any) => {
                if (err) reject(err);
                resolve(data);
            }
        })
    });
};

export { createTournament };


