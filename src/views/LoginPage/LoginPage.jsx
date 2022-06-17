import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { Title } from 'components/Title/Title.styled';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from 'server/authFetch';
import { toast } from 'react-toastify';
import { newToken, isAuth } from 'redux/sliceAuth';
import { validationLoginSchema } from 'utilits/validationForms';
import { Grid } from '@mui/material';
import {
  LinkToRegister,
  AskToRegister,
  ValidationTextField,
  ButtonSubmit,
  ButtonHome,
  FormSubmit,
} from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [createUser, { error }] = useLoginUserMutation();

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const onSubmitRegister = async event => {
    event.preventDefault();
    try {
      await validationLoginSchema.validate({
        email,
        password,
      });
    } catch (error) {
      toast.warn(`${error}`);
      return;
    }
    const send = { email: email, password: password };
    const responsLogin = await createUser(send);
    if (error) {
      console.log(error);
    }
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
      <ButtonHome>
        <NavLink to="/">Home</NavLink>
      </ButtonHome>
      <FormSubmit onSubmit={onSubmitRegister}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ValidationTextField
              label="Email Address"
              required
              fullWidth
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <ValidationTextField
              label="Password"
              required
              fullWidth
              type="text"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </Grid>
        </Grid>
        <ButtonSubmit type="submit">Sabmit</ButtonSubmit>
      </FormSubmit>
      <LinkToRegister>
        <AskToRegister>You don&#39;t have a login?</AskToRegister>
        <NavLink to="/auth/register">Registration</NavLink>
      </LinkToRegister>
    </ListAuth>
  );
};

export default LoginPage;
