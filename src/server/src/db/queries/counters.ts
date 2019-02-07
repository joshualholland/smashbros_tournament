import { Query } from '../index';

// Get all counter stages from database
const getCounters = () => Query(`SELECT * FROM counters`);

export default { getCounters };