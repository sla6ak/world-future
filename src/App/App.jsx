import { Routes, Route, Navigate } from 'react-router-dom'; // работа с маршрутизацией
import { lazy, useEffect, useState } from 'react';
import { Layout } from 'Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useGetIsActivUserQuery } from 'Redux/Server/authFetch';
import { useGetLanguageQuery } from 'Redux/Server/languageFetch';
import { isAuth } from 'Redux/AuthSlise';
import { transleter } from 'Redux/LanguageSlise';
import PrivateRoute from 'Components/PrivateRoute/PrivateRoute';
import PublicRoute from 'Components/PublicRoute/PublicRoute';
import { toast } from 'react-toastify';
import { ModalSettings } from 'Components/ModalSettings/ModalSettings';

// загрузка планет
const SetLordPage = lazy(() => import('../Views/SetLordPage/SetLordPage'));
const StartPage = lazy(() => import('../Views/StartPage/StartPage'));
const LoginPage = lazy(() => import('../Views/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Views/RegisterPage/RegisterPage'));
const LayoutGame = lazy(() => import('../LayoutGame/LayoutGame'));
const PlanetaBlueHome = lazy(() =>
  import('../Views/PlanetaBlueHome/PlanetaBlueHome')
);
const PlanetaYellowHome = lazy(() =>
  import('../Views/PlanetaYellowHome/PlanetaYellowHome')
);
const PlanetaLostWorld = lazy(() =>
  import('../Views/PlanetaLostWorld/PlanetaLostWorld')
);

export const App = () => {
  const token = useSelector(state => state.token);
  const myLanguage = useSelector(state => state.language.myLanguage); // должно вернуть сохраненный в локалке язык либо англ
  const { data: auth, error: errorAuth } = useGetIsActivUserQuery('', {
    skip: !token,
  });
  const [statusSettingsModal, setStatusSettingsModal] = useState(false);
  const { data: textSiteInLeng, error: errorLang } =
    useGetLanguageQuery(myLanguage);
  const dispatch = useDispatch();

  const onModalClose = () => {
    setStatusSettingsModal(prev => !prev);
  };

  useEffect(() => {
    const keyDownClose = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', keyDownClose);
    return () => {
      window.removeEventListener('keydown', keyDownClose);
    };
  }, []);

  // сохраняет авторизованого юзера
  useEffect(() => {
    if (errorAuth) {
      return console.log(errorAuth);
    }
    if (auth === undefined) {
      return;
    }
    dispatch(isAuth(auth.name));
    toast.success(`Welcome ${auth.name}`);
  }, [auth, dispatch, errorAuth]);

  // меняет текст сайта на выбранный язык
  useEffect(() => {
    if (errorLang) {
      return console.log(errorLang);
    }
    if (textSiteInLeng === undefined) {
      return;
    }
    dispatch(transleter(textSiteInLeng));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myLanguage, textSiteInLeng, errorLang]);

  return (
    <>
      {statusSettingsModal && <ModalSettings onModalClose={onModalClose} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
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
                <SetLordPage />
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
                  <PlanetaBlueHome />
                </PrivateRoute>
              }
            />
            <Route
              path="/play/YellowHome"
              element={
                <PrivateRoute>
                  <PlanetaYellowHome />
                </PrivateRoute>
              }
            />
            <Route
              path="/play/Lost"
              element={
                <PrivateRoute>
                  <PlanetaLostWorld />
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
