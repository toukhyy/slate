import { paths } from '@/config';
import { Navigate, Outlet } from 'react-router';

export function ProtectedLayout() {
  const user = null;

  if (!user) {
    return <Navigate to={paths.auth.login} replace />;
  }

  return (
    <main className="h-screen w-screen bg-slate-50 flex justify-center items-center">
      <Outlet />
    </main>
  );
}
