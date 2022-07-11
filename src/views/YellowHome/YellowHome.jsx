import { Canvas } from '@react-three/fiber';
import Box from 'componentsThree/Box/Box';
import { Suspense } from 'react';
import Planet from 'componentsThree/Planet/Planet';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import Star from 'componentsThree/Star/Star';
import MyLordModel from 'componentsThree/MyLordModel/MyLordModel';
import CosmosBox from 'componentsThree/CosmosBox/CosmosBox';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import CosmosSpace from './red.jpg';
// import { useState } from 'react';

const YellowHome = () => {
  const textureYellowCosmos = useLoader(TextureLoader, CosmosSpace);
  // const [allLords, setAllLords] = useState([0, 0, 0]);

  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <ambientLight color="#eeebbe" intensity={0.12} />
            <pointLight
              color="#f1eec3"
              intensity={0.9}
              position={[-14, 9, 0]}
            />
            {/* <directionalLight color="#dad69d" position={[100, 100, 100]} /> */}
            <Box position={[6, 7.5, 0.5]} />
            <Box position={[1, 13, 4]} />
            <Box position={[1, 4.5, 4.7]} />
            <Box position={[2, 16, 0]} />
            <Box position={[6, 7.5, 7.5]} />
            <Box position={[1, 13, 9]} />
            <Box position={[1, 4.5, 9.7]} />
            <Box position={[7, 16, 0]} />
            <CosmosBox textureCosmos={textureYellowCosmos} />
            <MyLordModel />
            <Planet />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default YellowHome;
