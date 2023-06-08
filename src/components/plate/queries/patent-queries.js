import { client, enviroment } from "../../../config";

export async function getPlate(plate) {
    const response = await client.get(enviroment.PLATES_URL(plate));
    return Promise.resolve(response?.data?.data);
}