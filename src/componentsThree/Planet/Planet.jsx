import { usePlane } from '@react-three/cannon';
import stoneJpg from './stoneTexture.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { RepeatWrapping } from 'three';

const Planet = () => {
  const textureStone = useLoader(TextureLoader, stoneJpg);
  textureStone.wrapS = RepeatWrapping;
  textureStone.wrapT = RepeatWrapping;
  textureStone.repeat.set(200, 200);

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2, 0],
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[700, 700]} />
      <meshStandardMaterial map={textureStone} />
    </mesh>
  );
};

export default Planet;
