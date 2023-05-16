// ***************** react  компоненты ***********************************
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPlayersHook } from '../../../Hooks/useGetPlayersHook'
// import { useState } from 'react';

// ************* Модели на планету ************************************
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'
import CosmosSpace from '../../../Images/textureCosmos/red.jpg'
import stoneJpg from '../../../Images/texturePlane/stoneTexture.jpg'
// import { useState } from 'react';

const PlanetYellowHome = () => {
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook({ channel: 'BlueHome' })
  const { YellowHomeInfo } = useSelector((state) => state)
  const { nikName } = useSelector((state) => state.lordInfo)
  const boxes = []
  for (let i = 0; i <= 20; i++) {
    boxes.push(i)
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
      {boxes.map((el, ind) => {
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
      <Planet planet={'YellowHomeInfo'} groundJpg={stoneJpg} />
      <Portal planet={'YellowHomeInfo'} position={[35, 0, 20]} />
    </>
  )
}

export default PlanetYellowHome
