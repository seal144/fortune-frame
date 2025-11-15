import { useMemo } from 'react';
import { Alert, Typography } from '@mui/material';
import { useAssetsQuery } from '@/api/assets';
import { PageTitle } from '@/components/common';
import { AssetsTable, AssetsTableSkeleton } from '@/components/Home';

export const Home = () => {
  const { data: assets, isLoading, error } = useAssetsQuery();

  const content = useMemo(() => {
    if (isLoading) return <AssetsTableSkeleton />;
    if (error)
      return (
        <Alert severity="error">
          Something went wrong, while fetching assets.
        </Alert>
      );
    if (!assets || assets.length === 0)
      return (
        <Typography textAlign="center">
          No assets added yet. Add your first asset to get started.
        </Typography>
      );
    return <AssetsTable assets={assets} />;
  }, [isLoading, error, assets]);

  return (
    <>
      <PageTitle title="Your assets" />
      {content}
    </>
  );
};
