import { Canvas } from '@react-three/fiber';
import Box from 'componentsThree/Box';
import { Suspense } from 'react';

const BlueHome = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <directionalLight color="grey" position={[0, 2, 0]} />
          <Box position={[1, 1, 1]} />
          <Box position={[-1, -1, 1]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BlueHome;
