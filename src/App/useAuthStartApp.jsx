import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetIsActivUserQuery } from 'Redux/ServerAPI/API_BASE_SERVER';
import { isAuth } from 'Redux/Slises/AuthSlise';
import { toast } from 'react-toastify';

export const useAuthStartApp = () => {
  const { token } = useSelector(state => state.auth);
  const { data: auth, error: errorAuth } = useGetIsActivUserQuery('', {
    skip: !token,
  });

  const dispatch = useDispatch();

  // сохраняет авторизованого юзера
  useEffect(() => {
    if (!token) return;
    if (errorAuth) {
      // console.log(errorAuth);
      return;
    }
    if (!auth) return;
    dispatch(isAuth(auth));
    toast.success(`Welcome ${auth.user.name}`);
  }, [auth, dispatch, token, errorAuth]);

  return { auth };
};
