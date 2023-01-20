// ***************** react  компоненты ***********************************
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'Components/LoaderSuspense/LoaderSuspense';
import { useLoader } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useGetPlayersHook } from '../../Hooks/useGetPlayersHook';
// import { useState } from 'react';

// ************* Модели на планету ************************************
import MyLordModel from 'ComponentsThree/MyLordModel/MyLordModel';
import CosmosBox from 'ComponentsThree/CosmosBox/CosmosBox';
import Box from 'ComponentsThree/Box/Box';
import Planet from 'ComponentsThree/Planet/Planet';
import PlanetTwo from 'ComponentsThree/Planet/PlanetTwo';
import Spaceport from 'ComponentsThree/Spaceport/Spaceport';
// import AnotherLordModel from 'componentsThree/AnotherLordModel/AnotherLordModel';
import AutoFuture from 'ComponentsThree/3D_models/AutoFuture/AutoFuture';
import Portal from 'ComponentsThree/3D_models/Portal/Portal';
import { SoldierModel } from 'ComponentsThree/3D_models/Soldier/Soldier';

// ************** Конфигурации для пропсов ****************************
import CosmosSpace from './tim-barton-5.jpg';
// *****************************************************************************************

const PlanetaBlueHome = () => {
  const textureCosmos = useLoader(TextureLoader, CosmosSpace);
  // const [allLords, setAllLords] = useState([0, 0, 0]);
  useGetPlayersHook({ channel: 'planetaBlueHome' });
  const { planetaBlueHomeInfo } = useSelector(state => state);
  const { nikName } = useSelector(state => state.lordInfo);
  const boxs = [];
  for (let i = 0; i <= 20; i++) {
    boxs.push(i);
  }
  function randomCount(max) {
    return Math.floor(Math.random() * max);
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
            {planetaBlueHomeInfo.players?.length > 1 &&
              planetaBlueHomeInfo.players.map(el => {
                if (el.nikName === nikName) {
                  return null;
                }
                return (
                  <SoldierModel
                    key={el.nikName + randomCount(100)}
                    playerInfo={el}
                  />
                );
              })}
            {boxs.map((el, ind) => {
              return (
                <Box
                  key={ind}
                  position={[
                    randomCount(100) - 50,
                    randomCount(3) - 2,
                    randomCount(100) - 50,
                  ]}
                />
              );
            })}
            <CosmosBox textureCosmos={textureCosmos} />
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
