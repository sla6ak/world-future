import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetMyPersonQuery } from 'Redux/ServerAPI/API_BASE_SERVER';
import { useNavigate } from 'react-router-dom';
import Chat from 'Components/Chat/Chat';
import Squad from 'Components/Squad/Squad';
import Missions from 'Components/Missions/Missions';
import { LoaderCastomGate } from 'Components/LoaderCastomGate/LoaderCastomGate';
import { useWsConnecting } from 'Hooks/useWsConnecting';
import {
  Holst,
  HeaderHelmet,
  FooterHelmet,
  KristalsBlue,
  KristalsYellow,
  KristalBox,
  Lord,
  NamePlanet,
  NikLord,
  ArmBox,
  MissionBox,
  ChatBox,
  SignalArm,
  SignalBox,
} from './LayoutGame.styled';
import { useEffect } from 'react';

const LeyoutGame = () => {
  useWsConnecting();
  const [visability, setVisability] = useState({
    chat: false,
    missions: false,
    squad: false,
  });
  // изначально переполучал весь объект но должен быть переработан и перезаписывать только измененные данные
  const { data: lordInfo } = useGetMyPersonQuery();
  const navigate = useNavigate();
  useEffect(() => {}, []);
  useEffect(() => {
    if (!lordInfo) {
      return;
    }
    navigate(`/play/${lordInfo?.data.planet}`);
  }, [lordInfo, navigate]);
  const quickArmInfo = unit => {
    const atac = lordInfo?.data.squad[unit].power.attack.shell.percent;
    const def = lordInfo?.data.squad[unit].power.defend.shell.percent;
    const life = lordInfo?.data.squad[unit].power.life.shell.percent;
    if (atac + def + life < 300) {
      return false;
    }
    return true;
  };
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
        <ArmBox
          onClick={e => {
            e.stopPropagation();
            setVisability(pevState => ({
              ...pevState,
              missions: false,
              squad: !pevState.squad,
            }));
          }}
        >
          Squad(P):
          <SignalBox>
            Rob
            <SignalArm
              style={{
                backgroundColor: quickArmInfo('robot') ? '#00c421' : '#b10000',
              }}
            />
            Shm
            <SignalArm
              style={{
                backgroundColor: quickArmInfo('robot') ? '#00c421' : '#b10000',
              }}
            />
            Snr
            <SignalArm
              style={{
                backgroundColor: quickArmInfo('robot') ? '#00c421' : '#b10000',
              }}
            />
          </SignalBox>
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
            setVisability(pevState => ({
              ...pevState,
              chat: !pevState.chat,
            }));
          }}
        >
          Chat(C)
        </ChatBox>
        <div>
          Planet:<NamePlanet>{lordInfo?.data.planet}</NamePlanet>
        </div>
        <MissionBox
          onClick={() => {
            setVisability(pevState => ({
              ...pevState,
              squad: false,
              missions: !pevState.missions,
            }));
          }}
        >
          Missions(M)
        </MissionBox>
      </FooterHelmet>
      {visability.chat && <Chat lordInfo={lordInfo} />}
      {visability.missions && <Missions lordInfo={lordInfo} />}
      {visability.squad && <Squad lordInfo={lordInfo} />}
      <Suspense fallback={<LoaderCastomGate>loading...</LoaderCastomGate>}>
        <Outlet />
      </Suspense>
    </Holst>
  );
};
export default LeyoutGame;
