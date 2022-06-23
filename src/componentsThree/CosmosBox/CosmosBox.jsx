import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import boxJpg from './tim-barton-5.jpg';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { DoubleSide } from 'three';

const CosmosBox = props => {
  const textureBox = useLoader(TextureLoader, boxJpg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.0008;
  }, []);

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[500, 500, 500]} />
      <meshStandardMaterial map={textureBox} side={DoubleSide} />
    </mesh>
  );
};

export default CosmosBox;
