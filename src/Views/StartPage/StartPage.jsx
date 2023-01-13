import React, { useEffect } from 'react';
import { ListAuth } from 'Components/ListAuth/ListAuth.styled';
import { Title } from 'Components/Title/Title.styled';
import { useNavigate } from 'react-router-dom';
import { TextGame, MenuSettings } from './StartPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { switchLanguage } from 'Redux/Slises/LanguageSlise';
import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import {
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';

const StartPage = () => {
  const { myLanguage, transleter } = useSelector(state => state.language);
  const { listLanguage, startPage } = transleter;
  const [langs, setLangs] = React.useState(myLanguage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    setLangs(event.target.value);
  };
  useEffect(() => {
    dispatch(switchLanguage(langs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langs]);

  return (
    <ListAuth>
      <Title>{!!startPage ? startPage.h1 : 'Welcome to my game!'}</Title>
      <TextGame>
        <Typography>
          {!!startPage
            ? startPage.aboutGame
            : 'If you see this page, the connection to the server may have been lost for some time or your internet is unstable. Perhaps this is your first time here? In any case, the menu is intuitive and the game process is exciting. This is an RPG where you will surely meet new comrades!'}
        </Typography>
      </TextGame>
      <MenuSettings>
        {/* <LabelCastom>
          {!!startPage ? startPage.buttons?.language : 'LANGUAGE'}
        </LabelCastom> */}
        <FormControl fullWidth>
          <InputLabel id="select-label" variant="standard">
            {!!startPage ? startPage.buttons.language : 'LANGUAGE'}
          </InputLabel>
          <Select
            labelId="select-label"
            value={langs}
            variant="standard"
            label={!!startPage ? startPage.buttons.language : 'LANGUAGE'}
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
        {!!startPage ? startPage.buttons.start : 'START GAME'}
      </GeneralButton>
    </ListAuth>
  );
};

export default StartPage;
