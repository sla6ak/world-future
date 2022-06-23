import { Canvas } from '@react-three/fiber';
import Box from 'componentsThree/Box/Box';
import { Suspense } from 'react';
import Planet from 'componentsThree/Planet/Planet';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import Star from 'componentsThree/Star/Star';
import MyLordModel from 'componentsThree/MyLordModel/MyLordModel';
import CosmosBox from 'componentsThree/CosmosBox/CosmosBox';
// import { useState } from 'react';

const BlueHome = () => {
  // const [allLords, setAllLords] = useState([0, 0, 0]);

  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <ambientLight color="#beebee" intensity={0.12} />
            <pointLight
              color="#f1eec3"
              intensity={0.9}
              position={[-14, 9, 0]}
            />
            {/* <directionalLight color="#9dc3da" position={[100, 100, 100]} /> */}
            <Star position={[-54, 200, 0]} />
            <Box position={[6, 7.5, 0.5]} />
            <Box position={[1, 13, 4]} />
            <Box position={[1, 4.5, 4.7]} />
            <Box position={[2, 16, 0]} />
            <CosmosBox />
            <MyLordModel />
            <Planet />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BlueHome;

// внимание базовые материалы не дают теней
// ambientLight окружающий свет
// pointLight точечный свет
// directionalLight прожектор который очень далеко направлен всегда ровно
// spotLight прожектор хорош для создания теней
