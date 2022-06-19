import { useLoader, useFrame } from '@react-three/fiber'; // frame это хук для анимаций
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import boxJpg from './box.jpg';

const Box = ({ position }) => {
  const textureBox = useLoader(TextureLoader, boxJpg);
  const refBox = useRef(); // в реф мы положим текущий куб это просто ссылка на меш

  useFrame(({ clock }) => {
    const timer = clock.getElapsedTime();
    // console.log(timer);
    refBox.current.rotation.x += 0.05;
  }, []);

  return (
    <mesh position={position} ref={refBox}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={textureBox} />
    </mesh>
  );
};

export default Box;
