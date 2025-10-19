import { Outlet } from 'react-router';

export const LoginLayout = () => {
  return (
    <div>
      <h1>Login</h1>
      <Outlet />
    </div>
  );
};
