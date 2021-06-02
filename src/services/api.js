import axios from 'axios';

//key = da2d11eb009719fdd46c25f265836463498afb71

// base url = https://api-ssl.bitly.com/v4/

export const key = 'da2d11eb009719fdd46c25f265836463498afb71';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})


export default api;