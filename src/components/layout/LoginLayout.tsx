import { Outlet } from 'react-router';
import { Container } from '@/components/layout';

export const LoginLayout = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Outlet />
    </Container>
  );
};
