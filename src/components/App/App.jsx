import { Routes, Route, Navigate } from 'react-router-dom'; // работа с маршрутизацией
import { lazy, useEffect } from 'react';
import { Layout } from 'Layout/Layout';
import { Home } from 'views/Home/Home';
import { useSelector, useDispatch } from 'react-redux';
import { useGetIsActivUserQuery } from 'server/authFetch';
import { isAuth } from 'redux/sliceAuth';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { toast } from 'react-toastify';

// const SetLord = lazy(() =>
//   import('../../views/SetLord/SetLord')
// );
// const PlanetHome = lazy(() =>
//   import('../../views/PlanetHome/PlanetHome')
// );

export const App = () => {
  //   const token = useSelector(state => state.token);
  //   const dispatch = useDispatch();
  //   const { data: auth, error } = useGetIsActivUserQuery('', { skip: !token });

  //   useEffect(() => {
  //     if (auth === undefined) {
  //       return;
  //     }
  //     dispatch(isAuth(auth.name));
  //   }, [auth, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/world-future"
            element={<PrivateRoute>{/* <SetLord /> */}</PrivateRoute>}
          />
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <PlanetHome />
              </PrivateRoute>
            }
          /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
