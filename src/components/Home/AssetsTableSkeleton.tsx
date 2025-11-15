import { Skeleton, Stack } from '@mui/material';

export const AssetsTableSkeleton = () => {
  return (
    <Stack spacing={1}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} variant="rectangular" height={50} />
      ))}
    </Stack>
  );
};
