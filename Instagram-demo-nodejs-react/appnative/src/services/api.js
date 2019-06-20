import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.3.2:7777'//if using via USB, use you machine IP
})

export default api;