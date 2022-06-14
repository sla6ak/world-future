import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  //   const auth = useSelector(state => state.auth);
  return (
    <Main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Main>
  );
}
