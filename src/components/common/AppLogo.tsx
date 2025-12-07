import { Stack, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import { NavLink } from 'react-router';

interface Props {
  unnavigable?: boolean;
}

const AppLogoContent = () => {
  return (
    <Stack direction="row" alignItems="center" gap={0} color="text.primary">
      <SavingsIcon />
      <Typography variant="h5">FortuneFrame</Typography>
    </Stack>
  );
};

export const AppLogo = ({ unnavigable = false }: Props) => {
  if (unnavigable) {
    return <AppLogoContent />;
  }
  return (
    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
      <AppLogoContent />
    </NavLink>
  );
};
