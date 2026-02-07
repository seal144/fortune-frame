import { Stack, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import { NavLink } from 'react-router';
import { DASHBOARD_PATH } from '@/router/router';

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
    <NavLink to={DASHBOARD_PATH} style={{ textDecoration: 'none' }}>
      <AppLogoContent />
    </NavLink>
  );
};
