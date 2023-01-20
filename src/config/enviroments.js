const {
    VITE_API_URL: baseURL,
} = import.meta.env;

const getEndpoints = (baseURL) => {
    return {
        LOGIN_URL: `${baseURL}/auth/login`,
        REGISTER_URL: `${baseURL}/auth/register`,
        REFRESH_URL: `${baseURL}/auth/refresh`,
        PATENTS_URL: (patent) => `${baseURL}/cars/patent/${patent}`,
    };
}

const ENDPOINTS = getEndpoints(baseURL);

export const enviroment = {
    ...ENDPOINTS,
};
