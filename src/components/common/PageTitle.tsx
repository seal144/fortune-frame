import Typography from '@mui/material/Typography';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="h4" textAlign="center" mb={2}>
      {title}
    </Typography>
  );
};
