// ***************** react  компоненты ***********************************
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense';
import { useLoader } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import { useState } from 'react';

// ************* Модели на планету ************************************
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel';
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox';
import Box from 'ComponentsThree/Box/Box';
import Planet from 'ComponentsThree/Planet/Planet';
import Spaceport from 'ComponentsThree/Spaceport/Spaceport';
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/AutoFuture/AutoFuture';
import Portal from 'ComponentsThree/Portal/Portal';
import { SoldierModel } from 'ComponentsThree/Soldier/Soldier';

// ************** Конфигурации для пропсов ****************************
import CosmosSpace from './tim-barton-5.jpg';
// *****************************************************************************************
import { useGetPlayersHook } from './useGetPlayersHook';

const PlanetaBlueHome = () => {
  const textureBlueCosmos = useLoader(TextureLoader, CosmosSpace);
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook();
  const players = useSelector(state => state.planetaBlueHomeInfo);
  const { nikName } = useSelector(state => state.lordInfo);

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
            {players?.length > 0 &&
              players.map(el => {
                if (el.nikName === nikName) {
                  return null;
                }
                return <SoldierModel key={el.nikName} playerInfo={el} />;
              })}

            <Box position={[6, 7.5, 0.5]} />
            <Box position={[1, 13, 4]} />
            <Box position={[1, 4.5, 4.7]} />
            <Box position={[8, 16, 0]} />
            <CosmosBox textureCosmos={textureBlueCosmos} />
            <AutoFuture position={[10, -5, 0]} />
            <MyLordModel />
            <Planet />
            {/* <AnotherLordModel position={[2, -2, 5]} /> */}
            <Spaceport position={[9, -15, 0]} />
            <Portal position={[35, -2, 20]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PlanetaBlueHome;
