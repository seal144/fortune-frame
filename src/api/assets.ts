import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from './queryKeys';
import type { Asset } from '@/types';

const assetsQuery = {
  queryKey: [QueryKeys.Assets],
  queryFn: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL as string}/assets`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch assets');
    }
    const data = (await response.json()) as Asset[];
    return data.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  },
};

export const useAssetsQuery = () => {
  return useQuery(assetsQuery);
};
