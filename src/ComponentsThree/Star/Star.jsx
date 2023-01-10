import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import starFire from './starFire.jpg';

const Star = ({ position }) => {
  const textureStar = useLoader(TextureLoader, starFire);
  const refBox = useRef();

  useFrame(() => {
    // refBox.current.rotation.x += 0.03;
    refBox.current.rotation.y += 0.01;
  }, []);

  return (
    <mesh position={position} ref={refBox}>
      <sphereGeometry args={[30]} />
      <meshStandardMaterial map={textureStar} />
    </mesh>
  );
};

export default Star;
