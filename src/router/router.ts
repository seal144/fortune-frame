import { createBrowserRouter, redirect } from 'react-router';
import { Home } from './Home';
import { HomeLayout, LoginLayout } from '@/components/layout';
import { Login } from './Login';
import { Register } from './Register';

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: '/auth',
    Component: LoginLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: '*',
    loader: () => {
      return redirect('/dashboard');
    },
  },
]);
