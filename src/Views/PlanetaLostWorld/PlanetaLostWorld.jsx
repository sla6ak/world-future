import React, { Suspense } from 'react'
// ***************** react  компоненты ***********************************
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense'
import { useSelector } from 'react-redux'
// import { useState } from 'react';

// ************* Модели на планету ************************************
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel'
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
// import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
// import Spaceport from 'ComponentsThree/3D_models/Spaceport/Spaceport'
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/3D_models/AutoFuture/AutoFuture'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'

// ************** Конфигурации для пропсов ****************************
import CosmosSpace from '../../Impegs/textureCosmos/blueStars.jpg'
import stoneJpg from '../../Impegs/texturePlane/ttrr.jpg'
import starFire from '../../Impegs/textureStars/starFire.jpg'
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
  const boxs = []
  for (let i = 0; i <= 20; i++) {
    boxs.push(i)
  }
  // function randomCount(max) {
  //   return Math.floor(Math.random() * max)
  // }

  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            {/* <ambientLight color="#beebee" intensity={0.2} /> */}
            {/* <pointLight
              color="#f1eec3"
              intensity={1}
              position={[-54, 200, 0]}
            /> */}
            {/* <directionalLight color="#9dc3da" position={[100, 100, 100]} /> */}
            {LostWorldInfo.players?.length > 1 &&
              LostWorldInfo.players.map((el) => {
                if (el.nikName === nikName) {
                  return null
                }
                return <SoldierModel key={el.nikName} playerInfo={el} />
              })}
            {/* {boxs.map((el, ind) => {
              return (
                <Box
                  key={ind}
                  position={[
                    randomCount(100) - 50,
                    randomCount(3) - 2,
                    randomCount(100) - 50
                  ]}
                />
              )
            })} */}
            <CosmosBox planet={'LostWorldInfo'} CosmosSpace={CosmosSpace} />
            <MyLordModel planet={'LostWorldInfo'} />
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
            <Debug>
              {/* <ScifiPortal position={[-45, 2, 30]} /> */}
              <StargatePrometheus
                planet={'LostWorldInfo'}
                position={[210, 99, 30]}
              />
              <AutoFuture planet={'LostWorldInfo'} position={[10, -1, 0]} />
              <AvtoFuture1
                planet={'LostWorldInfo'}
                position={[-38, -1.5, 16]}
              />
              {/* <Model position={[35, -2.4, 45]} />
              <Model2 position={[35, -2, -79]} /> */}
              {/* <AnomalTop position={[-35, -1.2, -29]} /> */}
              {/* <RobotAnime position={[5, -1.9, 4]} /> */}
              {/* <Spaceport position={[9, -15, 20]} /> */}
              <BaseYrs planet={'LostWorldInfo'} position={[-110, -1, 110]} />
            </Debug>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}
export default PlanetaLostWorld
