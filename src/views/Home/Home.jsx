import { NavLink } from 'react-router-dom';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { Title } from 'components/Title/Title.styled';
import { Typography } from '@mui/material/';
import { ButtonNavLink } from 'components/ButtonNavLink/ButtonNavLink.styled';
import { TextGame } from './Home.styled';

const Home = () => {
  return (
    <ListAuth>
      <Title>Welcom to my game!</Title>
      <TextGame>
        <Typography>
          You see this page because I didn&#39;t recognize you. If this is not
          your first time here, you can save the page in the browser so that it
          is easier for me to recognize you next time.
        </Typography>
      </TextGame>
      <ButtonNavLink>
        <NavLink to="/auth/login">Start Game</NavLink>
      </ButtonNavLink>
    </ListAuth>
  );
};

export default Home;
