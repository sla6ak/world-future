import React, { useEffect, useState } from 'react'
// ***************** react  компоненты ***********************************
import { useSelector } from 'react-redux'
// ************* Модели на планету ************************************
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox'
// import Box from 'ComponentsThree/Box/Box'
import Planet from 'ComponentsThree/Planet/Planet'
import Portal from 'ComponentsThree/3D_models/Portal/Portal'
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier'
// ************** Конфигурации для пропсов ****************************
import CosmosSpace from '../../../Images/textureCosmos/blueStars.jpg'
import stoneJpg from '../../../Images/texturePlane/ttrr.jpg'
// import starFire from '../../../Images/textureStars/starFire.jpg'
// *****************************************************************************************
import { useGetPlayersHook } from 'Hooks/useGetPlayersHook'
// import Star from 'ComponentsThree/Star/Star'

const PlanetLostWorld = () => {
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

  return (
    <>
      <ambientLight color="#beebee" intensity={0.2} />
      {listClients.length > 1 &&
        listClients.map((el) => {
          if (el === nikName) {
            return null
          }
          return <SoldierModel planet={'LostWorldInfo'} key={el} nikName={el} />
        })}
      <CosmosBox planet={'LostWorldInfo'} CosmosSpace={CosmosSpace} />
      <Planet planet={'LostWorldInfo'} groundJpg={stoneJpg} />
      <Portal position={[-35, 0, 10]} />
      {/* <Star
        planet={'LostWorldInfo'}
        starImg={starFire}
        position={[-725, 102, -850]}
        reSize={[280]}
      /> */}
    </>
  )
}
export default PlanetLostWorld
