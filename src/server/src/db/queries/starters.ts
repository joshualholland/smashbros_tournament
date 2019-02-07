import { Query } from '../index';

// Get all starter stages from database
const getStarters = () => Query(`SELECT * FROM starters`);

// Get one starter stage from database
const getStarter = (id: string) => Query(`SELECT * FROM starter WHERE id = ${id}`);

export default { getStarters, getStarter };