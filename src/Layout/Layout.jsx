import { Suspense } from 'react';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Main>
  );
}
