import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export default () => {
    const options = {
        baseURL: BASE_URL
    };

    const instance = axios.create(options);

    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });

    return instance;
};