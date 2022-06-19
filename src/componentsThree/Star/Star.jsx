import { useLoader, useFrame } from '@react-three/fiber'; // frame это хук для анимаций
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import starFire from './starFire.jpg';

const Star = ({ position }) => {
  const textureStar = useLoader(TextureLoader, starFire);
  const refBox = useRef(); // в реф мы положим текущий куб это просто ссылка на меш

  useFrame(({ clock }) => {
    // const timer = clock.getElapsedTime();
    // console.log(timer);
    // refBox.current.rotation.x += 0.03;
    refBox.current.rotation.y += 0.1;
  }, []);

  return (
    <mesh position={position} ref={refBox}>
      <sphereGeometry />
      <meshStandardMaterial map={textureStar} />
    </mesh>
  );
};

export default Star;
