import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeSwitch } from '@/components/common';
import Stack from '@mui/material/Stack';
import { Container } from '@/components/layout';

export const AppTopBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h5">Fortune Frame</Typography>
            <ThemeSwitch />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
