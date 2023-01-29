import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense'
import PlanetaBlueHome from 'Views/Planets/PlanetaBlueHome/PlanetaBlueHome'
import PlanetaLostWorld from 'Views/Planets/PlanetaLostWorld/PlanetaLostWorld'
import PlanetaYellowHome from 'Views/Planets/PlanetaYellowHome/PlanetaYellowHome'
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel'

const GameBoard = () => {
  const { lordInfo } = useSelector((state) => state)
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <MyLordModel planet={lordInfo.planet} />
            {lordInfo.planet === 'BlueHome' && <PlanetaBlueHome />}
            {lordInfo.planet === 'YellowHome' && <PlanetaYellowHome />}
            {lordInfo.planet === 'LostWorld' && <PlanetaLostWorld />}
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default GameBoard
