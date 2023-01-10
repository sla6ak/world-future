import React, { useEffect } from 'react';
import { ListAuth } from 'Components/ListAuth/ListAuth.styled';
import { Title } from 'Components/Title/Title.styled';
import { useNavigate } from 'react-router-dom';
import { TextGame } from './StartPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { myLanguage } from 'Redux/LanguageSlise';
import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';
import { MenuSettings } from './StartPage.styled';

const StartPage = () => {
  const { listLanguage, StartPage } = useSelector(
    state => state.language.transleter
  );
  const { language } = useSelector(state => state);
  const [langs, setLangs] = React.useState(language.myLanguage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    setLangs(event.target.value);
  };
  useEffect(() => {
    dispatch(myLanguage(langs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langs]);

  return (
    <ListAuth>
      <Title>{!!StartPage ? StartPage.h1 : 'Welcome to my game!'}</Title>
      <TextGame>
        <Typography>
          {!!StartPage
            ? StartPage.aboutGame
            : 'If you see this page, the connection to the server may have been lost for some time or your internet is unstable. Perhaps this is your first time here? In any case, the menu is intuitive and the game process is exciting. This is an RPG where you will surely meet new comrades!'}
        </Typography>
      </TextGame>
      <MenuSettings>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" variant="standard">
            {!!StartPage ? StartPage.buttons.language : 'LANGUAGE'}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={langs}
            variant="standard"
            label="Age"
            onChange={handleChange}
          >
            {!!listLanguage &&
              listLanguage.map(el => {
                return (
                  <MenuItem key={el.shortName} value={el.shortName}>
                    {el.text}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </MenuSettings>
      <GeneralButton
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        {!!StartPage ? StartPage.buttons.start : 'START GAME'}
      </GeneralButton>
    </ListAuth>
  );
};

export default StartPage;
