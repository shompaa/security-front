import { useMutation, useQueryClient } from 'react-query';
import { login } from '../mutations/auth-mutation';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => login(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
    });
};