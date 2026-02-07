import { createBrowserRouter, redirect } from 'react-router';
import { Home } from './Home';
import { HomeLayout, LoginLayout } from '@/components/layout';
import { Login } from './Login';
import { Register } from './Register';
import { AuthGuard } from './AuthGuard';

export const DASHBOARD_PATH = '/dashboard';
export const AUTH_PATH = '/auth';
export const REGISTER_SUBDIRECTORY = 'register';
export const REGISTER_PATH = `${AUTH_PATH}/${REGISTER_SUBDIRECTORY}`;

export const router = createBrowserRouter([
  {
    path: DASHBOARD_PATH,
    Component: () => <AuthGuard><HomeLayout /></AuthGuard>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: AUTH_PATH,
    Component: () => <AuthGuard shouldBeAuthenticated={false}><LoginLayout /></AuthGuard>,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: REGISTER_SUBDIRECTORY,
        Component: Register,
      },
    ],
  },
  {
    path: '*',
    loader: () => {
      return redirect(DASHBOARD_PATH);
    },
  },
]);
