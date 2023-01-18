import { usePlane, useSphere } from '@react-three/cannon';
import stoneJpg from './stoneTexture.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { RepeatWrapping } from 'three';
// import { useSphere } from '@react-three/cannon';

const Planet = () => {
  const textureStone = useLoader(TextureLoader, stoneJpg);
  textureStone.wrapS = RepeatWrapping;
  textureStone.wrapT = RepeatWrapping;
  textureStone.repeat.set(200, 200);

  const [refS, api] = useSphere(() => ({
    type: 'Dynamic',
    mass: 1,
    position: [3, 5, 0],
    matrixAutoUpdate: true,
    // scale: [0.2, 0.2, 0.2],
  }));

  return (
    <mesh ref={refS}>
      <sphereBufferGeometry args={[1, 15, 15]} />
      {/* <planeGeometry args={[20, 20]} /> */}
      {/* <planeBufferGeometry args={[10, 10, 10, 10]} /> */}
      {/* <meshStandardMaterial map={textureStone} /> */}
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Planet;
