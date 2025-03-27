import { ProtectedLayout, PublicLayout } from '@/components';
import { paths } from '@/config';
import { LoginPage, RegisterPage } from '@/features/auth';
import { HomePage } from '@/features/informative';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    Component: PublicLayout,
    path: paths.root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: paths.auth.login,
        Component: LoginPage,
      },
      {
        path: paths.auth.register,
        Component: RegisterPage,
      },
    ],
  },
  {
    Component: ProtectedLayout,
    path: '/profile',
    children: [],
  },
]);

export function RoutesProvider() {
  return <RouterProvider router={router} />;
}
