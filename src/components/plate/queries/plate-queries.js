import { client, enviroment } from "../../../config";

export async function getPlate(plate) {
    const response = await client.get(enviroment.PLATES_URL(plate));
    console.log(response?.data?.data);
    return Promise.resolve(response?.data?.data);
}