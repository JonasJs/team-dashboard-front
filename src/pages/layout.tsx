import { Nav } from '@/components';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
