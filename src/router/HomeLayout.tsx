import { Outlet } from 'react-router';

export const HomeLayout = () => {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};
