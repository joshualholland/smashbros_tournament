import { Query } from '../index';

// Get all avatar pictures
const getAvatars = () => Query(`SELECT * FROM avatars`);

// Get one avatar picture
const getAvatar = (id: string) => Query(`SELECT * FROM avatars WHERE id = ${id}`);

export default {
    getAvatars,
    getAvatar
};