import axios from 'axios';

const mainURL = process.env.MAIN_URL;
const instance = axios.create({ baseURL: mainURL });

export default instance;
