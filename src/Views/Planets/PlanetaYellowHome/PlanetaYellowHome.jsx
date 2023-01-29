// ***************** react  компоненты ***********************************
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPlayersHook } from '../../../Hooks/useGetPlayersHook'
// import { useState } from 'react';

// ************* Модели на планету ************************************
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
import Spaceport from 'ComponentsThree/3D_models/Spaceport/Spaceport'
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/3D_models/AutoFuture/AutoFuture'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'
import CosmosSpace from '../../../Impegs/textureCosmos/red.jpg'
import stoneJpg from '../../../Impegs/texturePlane/stoneTexture.jpg'
// import { useState } from 'react';

const PlanetaYellowHome = () => {
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook({ channel: 'BlueHome' })
  const { YellowHomeInfo } = useSelector((state) => state)
  const { nikName } = useSelector((state) => state.lordInfo)
  const boxs = []
  for (let i = 0; i <= 20; i++) {
    boxs.push(i)
  }
  function randomCount(max) {
    return Math.floor(Math.random() * max)
  }
  return (
    <>
      <ambientLight color="#beebee" intensity={0.2} />
      <pointLight color="#f1eec3" intensity={1} position={[-54, 200, 0]} />
      {/* <directionalLight color="#9dc3da" position={[100, 100, 100]} /> */}
      {YellowHomeInfo.players?.length > 1 &&
        YellowHomeInfo.players.map((el) => {
          if (el.nikName === nikName) {
            return null
          }
          return <SoldierModel key={el.nikName} playerInfo={el} />
        })}
      {boxs.map((el, ind) => {
        return (
          <Box
            planet={'YellowHomeInfo'}
            key={ind}
            position={[
              randomCount(100) - 50,
              randomCount(3) - 2,
              randomCount(100) - 50
            ]}
          />
        )
      })}
      <CosmosBox planet={'YellowHomeInfo'} CosmosSpace={CosmosSpace} />
      <AutoFuture planet={'YellowHomeInfo'} position={[10, -1, 0]} />
      <Planet planet={'YellowHomeInfo'} groundJpg={stoneJpg} />
      {/* <AnotherLordModel position={[2, -2, 5]} /> */}
      <Spaceport planet={'YellowHomeInfo'} position={[9, -15, 0]} />
      <Portal planet={'YellowHomeInfo'} position={[35, -2, 20]} />
    </>
  )
}

export default PlanetaYellowHome
