import React, { Suspense } from 'react'
// ***************** react  компоненты ***********************************
import { Canvas, useLoader } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense'
import { useSelector } from 'react-redux'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import { useState } from 'react';

// ************* Модели на планету ************************************
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel'
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
import Spaceport from 'ComponentsThree/Spaceport/Spaceport'
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/3D_models/AutoFuture/AutoFuture'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'

// ************** Конфигурации для пропсов ****************************
import CosmosSpace from './blueStars.jpg'
// *****************************************************************************************
import { useGetPlayersHook } from 'Hooks/useGetPlayersHook'
import { AvtoFuture1 } from 'ComponentsThree/3D_models/AvtoFuture1/AvtoFuture1'
import { Model } from 'ComponentsThree/3D_models/Scene'

const PlanetaLostWorld = () => {
  const textureCosmos = useLoader(TextureLoader, CosmosSpace)
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook({ channel: 'planetaLostWorld' })
  const { planetaLostWorldInfo } = useSelector((state) => state)
  const { nikName } = useSelector((state) => state.lordInfo)
  const boxs = []
  for (let i = 0; i <= 20; i++) {
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
            {planetaLostWorldInfo.players?.length > 1 &&
              planetaLostWorldInfo.players.map((el) => {
                if (el.nikName === nikName) {
                  return null
                }
                return <SoldierModel key={el.nikName} playerInfo={el} />
              })}
            {boxs.map((el, ind) => {
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
            })}
            <CosmosBox textureCosmos={textureCosmos} />
            <AutoFuture position={[10, -1, 0]} />
            <MyLordModel />
            <AvtoFuture1 position={[3, 0, 4]} />
            <Model position={[35, -2.3, 45]} />
            <Planet />
            {/* <AnotherLordModel position={[2, -2, 5]} /> */}
            <Spaceport position={[9, -15, 0]} />
            <Portal position={[-35, -2, 20]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}
export default PlanetaLostWorld
