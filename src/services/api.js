import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://api.genius.com/',
});

export default api;
