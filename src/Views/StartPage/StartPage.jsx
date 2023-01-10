import React from 'react';
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
  NativeSelect,
  InputLabel,
} from '@mui/material';
import { MenuSettings } from './StartPage.styled';

const StartPage = () => {
  const { transleter } = useSelector(state => state.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ListAuth>
      <Title>
        {transleter.StartPage ? transleter.StartPage.h1 : 'Welcome to my game!'}
      </Title>
      <TextGame>
        <Typography>
          {transleter.StartPage
            ? transleter.StartPage.aboutGame
            : 'If you see this page, the connection to the server may have been lost for some time or your internet is unstable. Perhaps this is your first time here? In any case, the menu is intuitive and the game process is exciting. This is an RPG where you will surely meet new comrades!'}
        </Typography>
      </TextGame>
      <MenuSettings>
        <FormControl fullWidth>
          <InputLabel htmlFor="uncontrolled">
            {transleter.StartPage
              ? transleter.StartPage.buttons.language
              : 'LANGUAGE'}
          </InputLabel>
          <NativeSelect
            defaultValue="ENGLISH"
            inputProps={{
              name: 'age',
              id: 'uncontrolled',
            }}
          >
            {transleter.listLanguage.map(el => {
              return (
                <option
                  onClick={() => dispatch(myLanguage(el.shortName))}
                  key={el.shortName}
                  value={10}
                >
                  {el.text}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </MenuSettings>
      <GeneralButton
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        {transleter.StartPage
          ? transleter.StartPage.buttons.start
          : 'START GAME'}
      </GeneralButton>
    </ListAuth>
  );
};

export default StartPage;
