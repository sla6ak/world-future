import { usePlane } from '@react-three/cannon';
// import { useRef } from 'react';
import stoneJpg from './stoneTexture.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Planet = () => {
  const textureStone = useLoader(TextureLoader, stoneJpg);

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, -9, -1],
    // radius: 8,
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial map={textureStone} />
    </mesh>
  );
};

export default Planet;
