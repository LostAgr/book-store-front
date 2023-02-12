import axios from "axios";

export const API = axios.create({baseURL: 'http://localhost:8000'});

    API.interceptors.request.use(config => {
        if (localStorage.getItem('access_token')) {
            config.headers = {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        return config;
    }, error => {});

    API.interceptors.response.use(config => {
        return config;
    }, error => {
        if (error.response.status === 401) {
            window.location.href = '/';
        }
    });