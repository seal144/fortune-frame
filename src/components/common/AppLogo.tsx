import { Stack, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import { NavLink } from 'react-router';

export const AppLogo = () => {
  return (
    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
      <Stack direction="row" alignItems="center" gap={0} color="text.primary">
        <SavingsIcon />
        <Typography variant="h5">FortuneFrame</Typography>
      </Stack>
    </NavLink>
  );
};
