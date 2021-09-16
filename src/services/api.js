import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.genius.com',
});

export default api;
