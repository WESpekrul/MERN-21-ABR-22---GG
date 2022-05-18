import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-type": "application/json"
      }
})

export default api;

//'http://10.11.14.29:8080'