import { NavLink } from 'react-router-dom';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import Title from 'components/Title/Title';

const Home = () => {
  return (
    <ListAuth>
      <Title>Hello</Title>
      <p>
        You see this page because I didn&#39;t recognize you. If this is not
        your first time here, you can save the page in the browser so that it is
        easier for me to recognize you next time.
      </p>
      <div>
        <p>I want to play this game</p>
        <NavLink to="/play">Start Game</NavLink>
      </div>
    </ListAuth>
  );
};

export default Home;
