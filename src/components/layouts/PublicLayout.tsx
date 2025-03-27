import { Outlet } from 'react-router';

export function PublicLayout() {
  return (
    <main className="h-screen w-screen bg-slate-50 flex justify-center items-center">
      <Outlet />
    </main>
  );
}
