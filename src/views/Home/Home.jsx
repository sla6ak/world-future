import { NavLink } from 'react-router-dom';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { Title } from 'components/Title/Title.styled';
import { Typography } from '@mui/material/';
import { ButtonNavLink } from 'components/ButtonNavLink/ButtonNavLink.styled';
import { TextGame, TextSuper } from './Home.styled';

const Home = () => {
  return (
    <ListAuth>
      <Title>Welcome to my game!</Title>
      <TextGame>
        <Typography>
          If you see this page, the connection to the server may have been lost
          for some time or your internet is unstable. Perhaps this is your first
          time here? In any case, the menu is intuitive and the game process is
          exciting. This is an RPG where you will surely meet new comrades!
        </Typography>
        <Typography>
          The game is controlled by hotkeys, it's not difficult. to move use
          <TextSuper> W A S D</TextSuper> also jump space.
        </Typography>
      </TextGame>
      <ButtonNavLink>
        <NavLink to="/auth/login">Start Game</NavLink>
      </ButtonNavLink>
    </ListAuth>
  );
};

export default Home;
