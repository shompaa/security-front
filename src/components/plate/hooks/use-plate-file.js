import { useMutation, useQueryClient } from "react-query";
import { getPlateByFile } from "../mutations/plate-mutations";

export const usePlateByFile = () => {
  const queryClient = useQueryClient();

  return useMutation((file) => getPlateByFile(file), {
    onSuccess: () => {
      queryClient.invalidateQueries("file");
    },
  });
};
