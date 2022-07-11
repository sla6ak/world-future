import { Routes, Route, Navigate } from 'react-router-dom'; // работа с маршрутизацией
import { lazy, useEffect } from 'react';
import { Layout } from 'Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useGetIsActivUserQuery } from 'server/authFetch';
import { isAuth } from 'redux/AuthSlise';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { toast } from 'react-toastify';

const SetLord = lazy(() => import('../../views/SetLord/SetLord'));
const Home = lazy(() => import('../../views/Home/Home'));
const LoginPage = lazy(() => import('../../views/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../views/RegisterPage/RegisterPage')
);
const LayoutGame = lazy(() => import('../../LayoutGame/LayoutGame'));
const BlueHome = lazy(() => import('../../views/BlueHome/BlueHome'));
const YellowHome = lazy(() => import('../../views/YellowHome/YellowHome'));
const LostWorld = lazy(() => import('../../views/LostWorld/LostWorld'));

export const App = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const { data: auth, error } = useGetIsActivUserQuery('', { skip: !token });

  useEffect(() => {
    if (error) {
      return console.log(error);
    }
    if (auth === undefined) {
      return;
    }
    dispatch(isAuth(auth.name));
    toast.success(`Welcome ${auth.name}`);
  }, [auth, dispatch, error]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/auth/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/auth/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/setlord"
            element={
              <PrivateRoute>
                <SetLord />
              </PrivateRoute>
            }
          />
          <Route
            path="/play"
            element={
              <PrivateRoute>
                <LayoutGame />
              </PrivateRoute>
            }
          >
            <Route
              path="/play/BlueHome"
              element={
                <PrivateRoute>
                  <BlueHome />
                </PrivateRoute>
              }
            />
            <Route
              path="/play/YellowHome"
              element={
                <PrivateRoute>
                  <YellowHome />
                </PrivateRoute>
              }
            />
            <Route
              path="/play/Lost"
              element={
                <PrivateRoute>
                  <LostWorld />
                </PrivateRoute>
              }
            />
            {/* <Route
            path="/play/mainingWorld"
            element={
              <PrivateRoute>
                <SetLord />
              </PrivateRoute>
            }
          />
          <Route
            path="/play/portalWorld"
            element={
              <PrivateRoute>
                <SetLord />
              </PrivateRoute>
            }
          /> */}
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
