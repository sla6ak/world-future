import { useLoader, useFrame } from '@react-three/fiber'; // frame это хук для анимаций
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import boxJpg from './box.jpg';
import { useBox } from '@react-three/cannon';

const Box = ({ position }) => {
  const textureBox = useLoader(TextureLoader, boxJpg);
  const [refBox] = useBox(() => ({
    position: [0, 5, 0],
    mass: 1,
  }));

  // useFrame(({ clock }) => {
  //   // const timer = clock.getElapsedTime();
  //   // console.log(timer);
  //   refBox.current.rotation.x += 0.05;
  //   refBox.current.rotation.y += 0.05;
  // }, []);

  return (
    <mesh position={position} ref={refBox}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={textureBox} />
    </mesh>
  );
};

export default Box;
