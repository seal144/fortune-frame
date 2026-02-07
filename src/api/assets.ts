import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from './queryKeys';
import type { Asset } from '@/types';
import { AUTH_TOKEN_KEY } from '@/consts';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const assetsQuery = {
  queryKey: [QueryKeys.Assets],
  queryFn: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL as string}/assets`
      ,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY) as string}`,
        },
      }
    );
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem(AUTH_TOKEN_KEY);

        throw new Error('Unauthorized');
      }
      throw new Error('Failed to fetch assets');
    }
    const data = (await response.json()) as Asset[];
    return data.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  },
};

export const useAssetsQuery = () => {
  const { checkAuth } = useAuth();

  useEffect(() => {
    // TODO: add notification "session expired" maybe as callback
    checkAuth();
  }, [checkAuth]);

  return useQuery(assetsQuery);
};
