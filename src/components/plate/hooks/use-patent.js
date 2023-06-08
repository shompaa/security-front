import { useQuery } from "react-query";
import { getPlate } from "../queries/plate-queries";
// intentar solo una vez la request

export const usePlate = (plate) => {
  return useQuery("getPlate", () => getPlate(plate), 
  {
    enabled: false,
    retry: false,

  });
};
