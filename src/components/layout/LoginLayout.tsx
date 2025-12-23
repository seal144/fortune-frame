import { Outlet } from 'react-router';
import { Container } from './Container';
import { Box, Stack, Typography } from '@mui/material';
import { AppLogo, LanguageToggler, ThemeToggler } from '@/components/common';
import { useTranslation } from 'react-i18next';

export const LoginLayout = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={1}
        paddingY={2}
      >
        <LanguageToggler />
        <ThemeToggler />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ flexGrow: 1 }}
        paddingY={4}
      >
        <Stack gap={1} width="100%">
          <AppLogo unnavigable />
          <Typography variant="h6">
            {t('manage_your_assets_with_ease')}
          </Typography>
          <Typography variant="body1">{t('login_app_description')}</Typography>
        </Stack>
        <Box
          sx={{
            height: '50vh',
            width: '2px',
            backgroundColor: 'text.primary',
          }}
          marginX={3}
        />
        <Box width="100%">
          <Outlet />
        </Box>
      </Stack>
    </Container>
  );
};
