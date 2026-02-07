import type { ApiError, LoginData, LoginResponse } from '@/types';
import { useMutation } from '@tanstack/react-query';

const getAuthMutation = (register = false) => {
  const endpoint = register ? '/auth/register' : '/auth/login';
  return {
    mutationFn: async (loginData: LoginData) => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL as string}${endpoint}`,
        {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        const responseData = await response.json() as ApiError;

        throw new Error(JSON.stringify({
          code: response.status,
          ...(responseData.error && { message: responseData.error }),
        }));
      }
  
      const responseData = await response.json() as LoginResponse;
   
      return responseData;
    },
  }
};


export const useRegisterQuery = () => {
  return useMutation(getAuthMutation(true));
};

export const useLoginQuery = () => {
  return useMutation(getAuthMutation(false));
};