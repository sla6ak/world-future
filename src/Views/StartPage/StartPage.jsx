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
  Box,
  InputLabel,
} from '@mui/material/';
import { MenuSettings } from './StartPage.styled';

const StartPage = () => {
  const { listLanguage, StartPage } = useSelector(
    state => state.language.transleter
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ListAuth>
      <Title>{StartPage ? StartPage.h1 : 'Welcome to my game!'}</Title>
      <TextGame>
        <Typography>
          {StartPage
            ? StartPage.aboutGame
            : 'If you see this page, the connection to the server may have been lost for some time or your internet is unstable. Perhaps this is your first time here? In any case, the menu is intuitive and the game process is exciting. This is an RPG where you will surely meet new comrades!'}
        </Typography>
        {/* <Typography>
          The game is controlled by hotkeys, it's not difficult. to move use
          <TextSuper> W A S D</TextSuper> also jump space.
        </Typography> */}
      </TextGame>
      <MenuSettings>
        <Box sx={{ minWidth: 120 }}>
          <FormControl
            fullWidth
            style={{ marginBottom: '30px', width: '200px' }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {StartPage ? StartPage.buttons.language : 'LANGUAGE'}
            </InputLabel>
            <NativeSelect
              defaultValue={'ENGLISH'}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              {listLanguage.map(el => {
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
        </Box>
        {/* <div>AUDIO</div>
        <div>VIDEO</div> */}
      </MenuSettings>
      <GeneralButton
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        {StartPage ? StartPage.buttons.start : 'START GAME'}
      </GeneralButton>
    </ListAuth>
  );
};

export default StartPage;
