import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetMyPersonQuery } from 'server/lordFetch';
import { useNavigate } from 'react-router-dom';
import Chat from 'components/Chat/Chat';
import {
  Holst,
  HeaderHelmet,
  FooterHelmet,
  RiteHelmet,
  KristalsBlue,
  KristalsYellow,
  KristalBox,
  Lord,
  NamePlanet,
  NikLord,
  ArmBox,
  MissionBox,
  ChatBox,
} from './LayoutGame.styled';
import { useEffect } from 'react';

const LeyoutGame = () => {
  const [visability, setChatVisability] = useState({
    chat: true,
    missions: false,
    squad: true,
  });
  const { data: lordInfo, error } = useGetMyPersonQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lordInfo) {
      return;
    }
    navigate(`/play/${lordInfo?.data.planet}`);
  }, [lordInfo, navigate]);

  return (
    <Holst>
      <HeaderHelmet
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <KristalBox>
          <KristalsBlue>
            Blue kristals:{lordInfo?.data.kristalsBlue}
          </KristalsBlue>
          <KristalsYellow>
            Yellow kristals:{lordInfo?.data.kristalsYellow}
          </KristalsYellow>
        </KristalBox>
        <Lord>
          Lord: <NikLord>{lordInfo?.data.nikName}</NikLord>
        </Lord>
        <ArmBox>
          Squad(P):{lordInfo?.data.squad.robot.power.attack.percent}
        </ArmBox>
      </HeaderHelmet>
      <FooterHelmet
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ChatBox
          onClick={e => {
            e.stopPropagation();
            setChatVisability(state => ({
              chat: !state.chat,
            }));
          }}
        >
          Chat(C)
        </ChatBox>
        <div>
          Planet:<NamePlanet>{lordInfo?.data.planet}</NamePlanet>
        </div>
        <MissionBox>Missions(M)</MissionBox>
      </FooterHelmet>
      {visability.chat && <Chat lordInfo={lordInfo} />}
      <RiteHelmet>My squad:</RiteHelmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Holst>
  );
};
export default LeyoutGame;
