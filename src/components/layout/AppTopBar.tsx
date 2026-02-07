import { AppBar, Button, Toolbar, Stack } from '@mui/material';
import { ThemeToggler, LanguageToggler } from '@/components/common';
import { Container } from '@/components/layout';
import { AppLogo } from '@/components/common';
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next';

export const AppTopBar = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <AppLogo />
            <Stack direction="row" gap={1}>
              <LanguageToggler />
              <ThemeToggler />
              <Button variant="outlined" color="inherit" onClick={logout}>{t('logout')}</Button>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
