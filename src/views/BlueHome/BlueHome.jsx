import { Canvas } from '@react-three/fiber';
import Box from 'componentsThree/Box/Box';
import { Suspense } from 'react';
import Planet from 'componentsThree/Planet/Planet';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import Star from 'componentsThree/Star/Star';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import { keyDown, keyUp } from 'utilits/listenerWASD';
import LordModel from 'componentsThree/LordModel/LordModel';

//  orthographic <Canvas>camera={{ zoom: 50, position: [0, 7, 30] }}
const BlueHome = () => {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, far: 1000, position: [0, -4.5, 18] }}>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <PerspectiveCamera />
            <OrbitControls />
            <ambientLight color="#beebee" intensity={0.25} />
            <pointLight
              color="#f1eec3"
              intensity={0.9}
              position={[-14, 9, 0]}
            />
            {/* <directionalLight color="#62a8d1" position={[100, 100, 100]} /> */}
            <Star position={[-14, 9, 0]} />
            <Box position={[6, 0.5, 0.5]} />
            <Box position={[1, 3, 4]} />
            <Box position={[1, 4.5, 4.7]} />
            <Box position={[2, -6, 0]} />
            <LordModel />
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
