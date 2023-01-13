import { NavLink } from 'react-router-dom';
import { validationRegisterSchema } from 'Helpers/validationForms';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Title } from 'Components/Title/Title.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ListAuth } from 'Components/ListAuth/ListAuth.styled';
import { useRegistrationUserMutation } from 'Redux/ServerAPI/API_BASE_SERVER';
import { isAuth, newToken } from 'Redux/Slises/AuthSlise';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import CloseIcon from '@mui/icons-material/Close';
import {
  AskToRegister,
  LinkToRegister,
  ButtonHome,
  ValidationTextField,
  ButtonWrapper,
  FormSubmit,
  ButtonLicensia,
} from 'Views/LoginPage/LoginPage.styled';
import { TextGame } from 'Views/StartPage/StartPage.styled';
// все стили тут написанные и переиспользованы со страницы логина

const Registration = () => {
  const [licensia, setLicensia] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createUser] = useRegistrationUserMutation();
  const { registerPage } = useSelector(state => state.language.transleter);

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
      <Title>{!!registerPage ? registerPage.h1 : 'Register please'}</Title>{' '}
      <ButtonHome onClick={() => navigate('/')}>
        <CloseIcon />
      </ButtonHome>
      {licensia ? (
        <>
          <FormSubmit onSubmit={onSubmitLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ValidationTextField
                  label="Full Name"
                  variant="filled"
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
                {!!registerPage ? registerPage.buttons.submit : 'Submit'}
              </GeneralButton>
            </ButtonWrapper>
          </FormSubmit>
          <LinkToRegister>
            <AskToRegister>
              {!!registerPage ? registerPage.ask : 'Do you have login?'}
            </AskToRegister>
            <NavLink style={{ color: '#2663e7' }} to="/auth/login">
              {!!registerPage ? registerPage.buttons.registration : 'Login'}
            </NavLink>
          </LinkToRegister>
        </>
      ) : (
        <>
          <h2>
            {!!registerPage ? registerPage.h2 : 'This is licensia for players'}
          </h2>
          <TextGame>
            <Typography>
              {!!registerPage
                ? registerPage.textLicensia
                : 'I can full controls this game and apgreding anything. You should not expect that the game will always meet your desires. By signing this agreement, you have the right to immerse yourself in the game world within the framework of the developer&#39;s intention and without infringing on the same rights of other users of the game. For violation of the rules of the game established by the developer, any player may be held liable both in-game and legally. The player can be either temporarily blocked or removed from the server without the possibility of recovery. All in-game purchases refunded. Have a nice game!'}
            </Typography>
          </TextGame>
          <div>
            <LinkToRegister>
              <ButtonLicensia onClick={agryClick}></ButtonLicensia>
              <AskToRegister>
                {!!registerPage ? registerPage.agree : 'I have read and agree'}
              </AskToRegister>
            </LinkToRegister>
          </div>
        </>
      )}
    </ListAuth>
  );
};
export default Registration;
