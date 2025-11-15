import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeToggle } from '@/components/common';
import Stack from '@mui/material/Stack';
import { Container } from '@/components/layout';

export const AppTopBar = () => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h5" color="text.primary">
              Fortune Frame
            </Typography>
            <ThemeToggle />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
