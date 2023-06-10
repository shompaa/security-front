const { VITE_API_URL: baseURL } = import.meta.env;

const getEndpoints = (baseURL) => {
  return {
    LOGIN_URL: `${baseURL}/auth/login`,
    REGISTER_URL: `${baseURL}/auth/register`,
    REFRESH_URL: `${baseURL}/auth/refresh`,
    PLATES_URL: (plate) => `${baseURL}/cars/plate/${plate}`,
    PLATES_FILES_URL: `${baseURL}/images/detect`,
  };
};

const ENDPOINTS = getEndpoints(baseURL);

export const enviroment = {
  ...ENDPOINTS,
};
