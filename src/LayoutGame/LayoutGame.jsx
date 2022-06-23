import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Holst,
  HeaderHelmet,
  FooterHelmet,
  LeftHelmet,
  RiteHelmet,
} from './LayoutGame.styled';

const LeyoutGame = () => {
  return (
    <Holst>
      <HeaderHelmet>hello lord more info here</HeaderHelmet>
      <FooterHelmet>My missions, quests</FooterHelmet>
      <LeftHelmet>Chat Game</LeftHelmet>
      <RiteHelmet>Chat Clan</RiteHelmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Holst>
  );
};
export default LeyoutGame;
