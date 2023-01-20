import axios from 'axios';
import { useSelector } from 'react-redux';
import { enviroment } from './enviroments';
import { store } from "../store";


const { 
    LOGIN_URL,
    REGISTER_URL,
} = enviroment;

const BYPASSED_URLS = [LOGIN_URL, REGISTER_URL];

const createHttpClient = () => {
    console.log(store.getState());
    const httpClient = axios.create({
        baseURL: enviroment.baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    httpClient.interceptors.request.use((config) => {
        const token = store.getState().auth.token;
        if (token && !BYPASSED_URLS.includes(config.url)) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    httpClient.interceptors.response.use(
        (response) => {   
            if (response.data.token) {
                client.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            }
            return response;
        }, (error) => {
            return Promise.reject(error);
        }
    );

    return httpClient;
};

export default createHttpClient();


