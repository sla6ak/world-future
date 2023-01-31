import React, { useEffect, useState } from 'react'
// ***************** react  компоненты ***********************************
import { useSelector } from 'react-redux'
// import { useState } from 'react';

// ************* Модели на планету ************************************
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
// import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
// import Spaceport from 'ComponentsThree/3D_models/Spaceport/Spaceport'
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/3D_models/AutoFuture/AutoFuture'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'

// ************** Конфигурации для пропсов ****************************
import CosmosSpace from '../../../Impegs/textureCosmos/blueStars.jpg'
import stoneJpg from '../../../Impegs/texturePlane/ttrr.jpg'
import starFire from '../../../Impegs/textureStars/starFire.jpg'
// *****************************************************************************************
import { useGetPlayersHook } from 'Hooks/useGetPlayersHook'
import { AvtoFuture1 } from 'ComponentsThree/3D_models/AvtoFuture1/AvtoFuture1'
// import { Model } from 'ComponentsThree/3D_models/Scene'
// import { Model2 } from 'ComponentsThree/3D_models/Scene2'
// import { AnomalTop } from 'ComponentsThree/3D_models/AnomalTop'
// import { RobotAnime } from 'ComponentsThree/3D_models/RobotAnime'
import { StargatePrometheus } from 'ComponentsThree/3D_models/StargatePrometheus'
import { BaseYrs } from 'ComponentsThree/3D_models/Base_yrs'
import Star from 'ComponentsThree/Star/Star'
// import { ScifiPortal } from 'ComponentsThree/3D_models/ScifiPortal'

const PlanetaLostWorld = () => {
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook({ channel: 'LostWorld' })
  const { LostWorldInfo } = useSelector((state) => state)
  const { nikName } = useSelector((state) => state.lordInfo)
  const [listClients, setListClients] = useState(
    Object.keys(LostWorldInfo.players)
  )

  useEffect(() => {
    setListClients(Object.keys(LostWorldInfo.players))
  }, [LostWorldInfo.players])

  const boxs = []
  for (let i = 0; i <= 10; i++) {
    boxs.push(i)
  }
  // function randomCount(max) {
  //   return Math.floor(Math.random() * max)
  // }

  return (
    <>
      {/* <ambientLight color="#beebee" intensity={0.2} /> */}
      {/* <pointLight
              color="#f1eec3"
              intensity={1}
              position={[-54, 200, 0]}
            /> */}
      {/* <directionalLight color="#9dc3da" position={[100, 100, 100]} /> */}
      {listClients.length > 1 &&
        listClients.map((el) => {
          if (el === nikName) {
            return null
          }
          return <SoldierModel planet={'LostWorldInfo'} key={el} nikName={el} />
        })}
      <CosmosBox planet={'LostWorldInfo'} CosmosSpace={CosmosSpace} />
      <Planet planet={'LostWorldInfo'} groundJpg={stoneJpg} />
      <Portal position={[-35, -2, 10]} />
      <Star
        planet={'LostWorldInfo'}
        starImg={starFire}
        position={[-725, 102, -850]}
        reSize={[280]}
      />
      <Star
        planet={'LostWorldInfo'}
        starImg={null}
        position={[31, 252, -840]}
        reSize={[40]}
      />
      <StargatePrometheus planet={'LostWorldInfo'} position={[210, 99, 30]} />
      <AutoFuture planet={'LostWorldInfo'} position={[10, -1, 0]} />
      <AvtoFuture1 planet={'LostWorldInfo'} position={[-38, -1.5, 16]} />
      {/* <ScifiPortal position={[-45, 2, 30]} /> */}
      {/* <Model position={[35, -2.4, 45]} />
              <Model2 position={[35, -2, -79]} /> */}
      {/* <AnomalTop position={[-35, -1.2, -29]} /> */}
      {/* <RobotAnime position={[5, -1.9, 4]} /> */}
      {/* <Spaceport position={[9, -15, 20]} /> */}
      <BaseYrs planet={'LostWorldInfo'} position={[-110, -1, 110]} />
    </>
  )
}
export default PlanetaLostWorld
