import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense'
import PlanetBlueHome from 'Views/Planets/PlanetBlueHome/PlanetBlueHome'
import PlanetLostWorld from 'Views/Planets/PlanetLostWorld/PlanetLostWorld'
import PlanetYellowHome from 'Views/Planets/PlanetYellowHome/PlanetYellowHome'
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel'

const GameBoard = () => {
  const { lordInfo } = useSelector((state) => state)
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <MyLordModel planet={lordInfo.planet} />
            {lordInfo.planet === 'BlueHome' && <PlanetBlueHome />}
            {lordInfo.planet === 'YellowHome' && <PlanetYellowHome />}
            {lordInfo.planet === 'LostWorld' && <PlanetLostWorld />}
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default GameBoard
