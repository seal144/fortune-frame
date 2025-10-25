import { Outlet } from 'react-router';
import { AppTopBar } from './AppTopBar';
import { Container } from '@/components/layout';

export const HomeLayout = () => {
  return (
    <>
      <AppTopBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
