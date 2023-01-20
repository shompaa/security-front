import { client, enviroment } from "../../../config";

export async function getPatent(patent) {
    const response = await client.get(enviroment.PATENTS_URL(patent));
    return Promise.resolve(response?.data?.data);
}