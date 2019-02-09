import { Query } from '../index';

//  get all players from database
const getPlayers = async () => Query(`SELECT * FROM players`);

// get single player from database
const getPlayer = async (id: number) => Query(`SELECT * FROM players WHERE id = ${id}`);

// add a new player to database
const addPlayer = async (columns: string, values: any[]) => Query(`INSERT INTO players(${columns}) VALUES(?)`, values);

// delete a player from database
const deletePlayer = async (id: number) => Query(`DELETE FROM players WHERE id = ${id}`);

// edit player in database
const editPlayer = async (columns: any[], values: any[], id: number) => Query(`UPDATE players SET ${columns[0]} = "${values[0]}", ${columns[1]} = "${values[1]}", ${columns[2]} = "${values[2]}" WHERE id = ${id}`);

// find a player by email for authentication
const findByEmail = (email: string) => Query(`SELECT * FROM players WHERE email = "${email}" LIMIT 1`);

export default { getPlayer, getPlayers, addPlayer, deletePlayer, editPlayer, findByEmail };

