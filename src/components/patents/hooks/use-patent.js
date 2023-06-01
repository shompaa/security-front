import { useQuery } from "react-query";
import { getPatent } from "../queries/patent-queries";
// intentar solo una vez la request

export const usePatent = (patent) => {
  return useQuery("getPatent", () => getPatent(patent), 
  {
    enabled: false,
    retry: false,

  });
};
