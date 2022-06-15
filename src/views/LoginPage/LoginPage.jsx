import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import Title from 'components/Title/Title';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from 'server/authFetch';
import { toast } from 'react-toastify';
import { newToken, isAuth } from 'redux/sliceAuth';
import { validationLoginSchema } from 'utilits/validationForms';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [createUser, { isError }] = useLoginUserMutation();

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const onSubmitRegister = async event => {
    event.preventDefault();
    try {
      const valid = await validationLoginSchema.validate({
        email,
        password,
      });
    } catch (error) {
      toast.warn(`${error}`);
      return;
    }
    const send = { email: email, password: password };
    const responsLogin = await createUser(send);
    // console.log(responsLogin);
    if (responsLogin.error?.status === 404) {
      toast.error('User not found');
      return;
    }
    if (responsLogin.data) {
      dispatch(newToken(responsLogin.data.token));
      dispatch(isAuth(responsLogin.data.user.name));
      toast.success('Succesful login user!');
    }
  };
  return (
    <ListAuth>
      <Title>Login Please</Title>
      <NavLink to="/">Home</NavLink>
      <form onSubmit={onSubmitRegister}>
        <label>
          Email:
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label>
          Password:
          <input
            required
            type="text"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>
        <span>You don&#39;t have a login?</span>
        <NavLink to="/auth/register">Registration</NavLink>
      </p>
    </ListAuth>
  );
};

export default LoginPage;
