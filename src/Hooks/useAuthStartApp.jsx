import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetIsActivUserQuery } from 'Redux/ServerAPI/API_BASE_SERVER';
import { isAuth } from 'Redux/Slises/AuthSlise';
import { toast } from 'react-toastify';

export const useAuthStartApp = () => {
  const token = useSelector(state => state.token);
  const { data: auth, error: errorAuth } = useGetIsActivUserQuery('', {
    skip: !token,
  });

  const dispatch = useDispatch();

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

  return { auth };
};
