import { Canvas } from '@react-three/fiber';
import Box from 'componentsThree/Box/Box';
import { Suspense } from 'react';
import Planet from 'componentsThree/Planet/Planet';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import Star from 'componentsThree/Star/Star';

const BlueHome = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <ambientLight intensity={0.1} />
            <pointLight position={[-4, 3, 0]} />
            <directionalLight color="#188acc" position={[0, 2, 0]} />
            <Star position={[-4, 3, 0]} />
            <Box position={[0, 0, 0]} />
            <Planet />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BlueHome;
