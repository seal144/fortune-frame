import { Outlet } from 'react-router';
import { AppTopBar } from './AppTopBar';
import { Container } from '@/components/layout';
import { Box } from '@mui/material';

export const HomeLayout = () => {
  return (
    <>
      <AppTopBar />
      <Container>
        <Box pt={3}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
