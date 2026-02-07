import {Box, Typography} from '@mui/material';

export const FormError = ({ message }: { message: string }) => {
  return (
    <Box sx={{ position: 'relative'}}>
      <Typography sx={{ position: 'absolute', bottom: -32, left: 0 }} variant="body2" color="error">{message}</Typography>
    </Box>
  );
}
