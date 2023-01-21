import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Chat from 'Components/Chat/Chat'
import Squad from 'Components/Squad/Squad'
import Missions from 'Components/Missions/Missions'
import { LoaderCastomGate } from 'Components/LoaderCastomGate/LoaderCastomGate'
import { useWsConnecting } from 'Hooks/useWsConnecting'
import WsConnectRout from 'ComponentsThree/WsConnectRout/WsConnectRout'
import { ModalCanvasWpapper } from 'Components/ModalCanvasWpapper/ModalCanvasWrapper'
import { ModalCanvasObjectInfo } from 'Components/ModalCanvasObjectInfo/ModalCanvasObjectInfo'
import { ModalCanvasClicInfo } from 'Components/ModalCanvasClicInfo/ModalCanvasClicInfo'
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
  DarkMatter
} from './LayoutGame.styled'
import CenterArrow from 'Components/CenterArrow/CenterArrow'
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux'

// нужно переписать код чтоб инфа про лорда была локальным стейтом а не удаленным так как получать мы ее будем и через сокеты тоже.
const LeyoutGame = () => {
  const { lordInfo, openCanvasModal } = useSelector((state) => state)
  useWsConnecting()
  const [visability, setVisability] = useState({
    chat: false,
    missions: false,
    squad: false
  })

  const quickArmInfo = (unit) => {
    const atac = lordInfo?.squad[unit].power.attack.shell.percent
    const def = lordInfo?.squad[unit].power.defend.shell.percent
    const life = lordInfo?.squad[unit].power.life.shell.percent
    if (atac + def + life < 300) {
      return false
    }
    return true
  }

  return (
    <Holst>
      <WsConnectRout>
        {(openCanvasModal.isClick || openCanvasModal.isHover) && (
          <ModalCanvasWpapper>
            {openCanvasModal.isHover && <ModalCanvasObjectInfo />}
            {openCanvasModal.isClick && <ModalCanvasClicInfo />}
          </ModalCanvasWpapper>
        )}
        <HeaderHelmet
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <KristalBox>
            <KristalsBlue>Blue cristals:{lordInfo?.cristalsBlue}</KristalsBlue>
            <KristalsYellow>
              Yellow cristals:{lordInfo?.cristalsYellow}
            </KristalsYellow>
            <DarkMatter>Dark matter:{lordInfo?.darkMatter}</DarkMatter>
          </KristalBox>
          <Lord>
            Lord: <NikLord>{lordInfo?.nikName}</NikLord>
          </Lord>
          <ArmBox
            onClick={(e) => {
              e.stopPropagation()
              setVisability((pevState) => ({
                ...pevState,
                missions: false,
                squad: !pevState.squad
              }))
            }}
          >
            Squad(P):
            <SignalBox>
              Rob
              <SignalArm
                style={{
                  backgroundColor: quickArmInfo('robot') ? '#00c421' : '#b10000'
                }}
              />
              Shm
              <SignalArm
                style={{
                  backgroundColor: quickArmInfo('robot') ? '#00c421' : '#b10000'
                }}
              />
              Snr
              <SignalArm
                style={{
                  backgroundColor: quickArmInfo('robot') ? '#00c421' : '#b10000'
                }}
              />
            </SignalBox>
          </ArmBox>
        </HeaderHelmet>
        <CenterArrow />
        <FooterHelmet
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <ChatBox
            onClick={(e) => {
              e.stopPropagation()
              setVisability((pevState) => ({
                ...pevState,
                chat: !pevState.chat
              }))
            }}
          >
            Chat(C)
          </ChatBox>
          <div>
            Planet:<NamePlanet>{lordInfo?.planet}</NamePlanet>
          </div>
          <MissionBox
            onClick={() => {
              setVisability((pevState) => ({
                ...pevState,
                squad: false,
                missions: !pevState.missions
              }))
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
      </WsConnectRout>
    </Holst>
  )
}
export default LeyoutGame
