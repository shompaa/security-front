import { client, enviroment } from "../../../config";

const { LOGIN_URL, REGISTER_URL } = enviroment;

export const login = async (data) => {
  const response = await client.post(LOGIN_URL, data);
  return response?.data?.data;
};

export const register = async (data) => {
  const response = await client.post(REGISTER_URL, data);
  return response;
};
