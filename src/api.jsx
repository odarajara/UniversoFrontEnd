import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5175', // Defina o endereço base da sua API
});

export default api;
