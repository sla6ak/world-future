import React, { Suspense } from 'react'
// ***************** react  компоненты ***********************************
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense'
import { useSelector } from 'react-redux'
import { useGetPlayersHook } from '../../Hooks/useGetPlayersHook'
// import { useState } from 'react';

// ************* Модели на планету ************************************
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel'
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
import Spaceport from 'ComponentsThree/3D_models/Spaceport/Spaceport'
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/3D_models/AutoFuture/AutoFuture'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'

// ************** Конфигурации для пропсов ****************************
import CosmosSpace from '../../Impegs/textureCosmos/tim-barton-5.jpg'
import iseJpg from '../../Impegs/texturePlane/ise2.jpg'
// *****************************************************************************************

const PlanetaBlueHome = () => {
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook({ channel: 'BlueHome' })
  const { BlueHomeInfo } = useSelector((state) => state)
  const { nikName } = useSelector((state) => state.lordInfo)
  const boxs = []
  for (let i = 0; i <= 10; i++) {
    boxs.push(i)
  }
  function randomCount(max) {
    return Math.floor(Math.random() * max)
  }
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <ambientLight color="#beebee" intensity={0.2} />
            <pointLight
              color="#f1eec3"
              intensity={1}
              position={[-54, 200, 0]}
            />
            {/* <directionalLight color="#9dc3da" position={[100, 100, 100]} /> */}
            {BlueHomeInfo.players?.length > 1 &&
              BlueHomeInfo.players.map((el) => {
                if (el.nikName === nikName) {
                  return null
                }
                return (
                  <SoldierModel
                    planet={'BlueHomeInfo'}
                    key={el.nikName}
                    playerInfo={el}
                  />
                )
              })}

            {boxs.map((el, ind) => {
              return (
                <Box
                  planet={'BlueHomeInfo'}
                  key={ind}
                  position={[
                    randomCount(100) - 50,
                    randomCount(3) - 2,
                    randomCount(100) - 50
                  ]}
                />
              )
            })}
            <CosmosBox CosmosSpace={CosmosSpace} />
            <AutoFuture planet={'BlueHomeInfo'} position={[10, -5, 0]} />
            <MyLordModel planet={'BlueHomeInfo'} />
            <Planet planet={'BlueHomeInfo'} groundJpg={iseJpg} />
            {/* <AnotherLordModel position={[2, -2, 5]} /> */}
            <Spaceport planet={'BlueHomeInfo'} position={[9, -15, 0]} />
            <Portal planet={'BlueHomeInfo'} position={[35, -2, 20]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default PlanetaBlueHome
