import { ListAuth } from 'Components/ListAuth/ListAuth.styled';
import { Title } from 'Components/Title/Title.styled';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from 'Redux/ServerAPI/API_BASE_SERVER';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { newToken, isAuth } from 'Redux/Slises/AuthSlise';
import CloseIcon from '@mui/icons-material/Close';
import { validationLoginSchema } from 'Helpers/validationForms';
import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import { Grid } from '@mui/material';
import {
  LinkToRegister,
  AskToRegister,
  ValidationTextField,
  ButtonWrapper,
  ButtonHome,
  FormSubmit,
} from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createUser] = useLoginUserMutation();
  const { loginPage } = useSelector(state => state.language.transleter);

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
      <Title>{!!loginPage ? loginPage.h1 : 'Login Please'}</Title>
      <ButtonHome onClick={() => navigate('/')}>
        <CloseIcon />
      </ButtonHome>
      <FormSubmit onSubmit={onSubmitRegister}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ValidationTextField
              label="Email Address"
              variant="filled"
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
              variant="filled"
              required
              fullWidth
              type="text"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </Grid>
        </Grid>
        <ButtonWrapper>
          <GeneralButton type="submit">
            {!!loginPage ? loginPage.buttons.submit : 'Submit'}
          </GeneralButton>
        </ButtonWrapper>
      </FormSubmit>
      <LinkToRegister>
        <AskToRegister>
          {!!loginPage ? loginPage.ask : 'You don&#39;t have a login?'}
        </AskToRegister>
        <NavLink style={{ color: '#2663e7' }} to="/auth/register">
          {!!loginPage ? loginPage.buttons.registration : 'Registration'}
        </NavLink>
      </LinkToRegister>
    </ListAuth>
  );
};

export default LoginPage;
