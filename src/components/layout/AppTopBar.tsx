import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeToggler, LanguageToggler } from '@/components/common';
import Stack from '@mui/material/Stack';
import { Container } from '@/components/layout';
import { AppLogo } from '@/components/common';

export const AppTopBar = () => {
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
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
