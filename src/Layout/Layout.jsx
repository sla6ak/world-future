import { Suspense } from 'react';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Main>
      <Suspense
        fallback={
          <Main>
            <div className="castom-spinner" />
          </Main>
        }
      >
        <Outlet />
      </Suspense>
    </Main>
  );
}
