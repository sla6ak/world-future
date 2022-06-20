import { Canvas } from '@react-three/fiber';
import Box from 'componentsThree/Box/Box';
import { Suspense, useEffect } from 'react';
import Planet from 'componentsThree/Planet/Planet';
import { Physics } from '@react-three/cannon';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import Star from 'componentsThree/Star/Star';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { keyDown, keyUp } from 'utilits/listenerWASD';

//  orthographic <Canvas>camera={{ zoom: 50, position: [0, 7, 30] }}
const BlueHome = () => {
  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
  }, []);

  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<LoaderSuspense />}>
          <Physics>
            <PerspectiveCamera position={[0, 7, 10]} />
            <OrbitControls />
            <ambientLight intensity={0.04} />
            <pointLight color="#f1eec3" intensity={0.3} position={[-4, 3, 0]} />
            {/* <directionalLight color="#62a8d1" position={[100, 100, 100]} /> */}
            <Star position={[-4, 8, 0]} />
            <Box position={[0, 0.5, 0.5]} />
            <Box position={[1, 0, 0]} />
            <Box position={[0, -6, 0]} />
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
