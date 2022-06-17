import { NavLink } from 'react-router-dom';
import { validationRegisterSchema } from 'utilits/validationForms';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Title } from 'components/Title/Title.styled';
import { useDispatch } from 'react-redux';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { useRegistrationUserMutation } from 'server/authFetch';
import { isAuth, newToken } from 'redux/AuthSlise';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import {
  AskToRegister,
  LinkToRegister,
  ButtonHome,
  ValidationTextField,
  ButtonSubmit,
  FormSubmit,
  ButtonLicensia,
} from 'views/LoginPage/LoginPage.styled';
import { TextGame } from 'views/Home/Home.styled';

const Registration = () => {
  const [licensia, setLicensia] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const [createUser, { error }] = useRegistrationUserMutation();

  const agryClick = () => {
    setLicensia(true);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handleName = event => {
    setName(event.target.value);
  };

  const onSubmitLogin = async event => {
    event.preventDefault();
    try {
      await validationRegisterSchema.validate({ email, password });
    } catch (error) {
      toast.warn(`${error}`);
      return;
    }
    const send = {
      name: name,
      email: email,
      password: password,
    };
    const responsRegister = await createUser(send);
    console.log(error);
    if (responsRegister.error?.status === 400) {
      toast.error('User dublicate');
      return;
    }
    if (responsRegister.data) {
      dispatch(newToken(responsRegister.data.token));
      dispatch(isAuth(responsRegister.data.user.name));
      toast.success('Create new user!');
    }
  };
  return (
    <ListAuth>
      <Title>Register please</Title>{' '}
      <ButtonHome>
        <NavLink to="/">Home</NavLink>
      </ButtonHome>
      {licensia ? (
        <>
          <FormSubmit onSubmit={onSubmitLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ValidationTextField
                  label="Full Name"
                  required
                  type="text"
                  name="fullName"
                  value={name}
                  onChange={handleName}
                  fullWidth
                />
              </Grid>
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
            <AskToRegister>Do you have login?</AskToRegister>
            <NavLink to="/auth/login">Login</NavLink>
          </LinkToRegister>
        </>
      ) : (
        <>
          <h2>This is licensia for players</h2>
          <TextGame>
            <Typography>
              I can full controls this game and apgreding anything. You should
              not expect that the game will always meet your desires. By signing
              this agreement, you have the right to immerse yourself in the game
              world within the framework of the developer&#39;s intention and
              without infringing on the same rights of other users of the game.
              For violation of the rules of the game established by the
              developer, any player may be held liable both in-game and legally.
              The player can be either temporarily blocked or removed from the
              server without the possibility of recovery. All in-game purchases
              are considered as payment for your leisure time and cannot be
              refunded. Have a nice game!
            </Typography>
          </TextGame>
          <div>
            <LinkToRegister>
              <ButtonLicensia onClick={agryClick}>yes</ButtonLicensia>
              <AskToRegister>I have read and agree</AskToRegister>
            </LinkToRegister>
          </div>
        </>
      )}
    </ListAuth>
  );
};
export default Registration;
