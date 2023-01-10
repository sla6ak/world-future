import React, { useRef, useState } from 'react';
import { ListAuth } from 'Components/ListAuth/ListAuth.styled';
import { Title } from 'Components/Title/Title.styled';
import { useNavigate } from 'react-router-dom';
import { TextGame } from './StartPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { myLanguage } from 'Redux/LanguageSlise';
import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import {
  Popper,
  Typography,
  MenuItem,
  ClickAwayListener,
  Button,
  Grow,
  Paper,
  MenuList,
} from '@mui/material/';
import { MenuSettings } from './StartPage.styled';

const StartPage = () => {
  const [openLeng, setOpenLeng] = useState(false);
  const { listLanguage, StartPage } = useSelector(
    state => state.language.transleter
  );
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpenLeng(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenLeng(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenLeng(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openLeng);
  React.useEffect(() => {
    if (prevOpen.current === true && openLeng === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openLeng;
  }, [openLeng]);

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
        <Button
          ref={anchorRef}
          aria-controls={openLeng ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ marginBottom: '25px' }}
        >
          {StartPage ? StartPage.buttons.language : 'LANGUAGE'}
        </Button>
        <Popper
          open={openLeng}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ zIndex: 2 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openLeng}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {listLanguage.map(el => {
                      return (
                        <MenuItem
                          key={el.shortName}
                          onClick={event => {
                            dispatch(myLanguage(el.shortName));
                            handleClose(event);
                          }}
                        >
                          {el.text}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
