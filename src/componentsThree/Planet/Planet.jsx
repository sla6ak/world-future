import { usePlane } from '@react-three/cannon';
// import { useRef } from 'react';
// import stoneJpg from './stoneTexture.jpg';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Planet = () => {
  // const textureStone = useLoader(TextureLoader, stoneJpg);

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, -9, -1],
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={'#999'} />
    </mesh>
  );
};

export default Planet;
