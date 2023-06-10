import { client, enviroment } from "../../../config";

const { PLATES_FILES_URL } = enviroment;

export const getPlateByFile = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await client.post(PLATES_FILES_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response?.data);

  return response?.data?.data;
};
