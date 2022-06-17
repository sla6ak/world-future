import { Canvas } from '@react-three/fiber';

const BlueHome = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[0, 2, 0]} />
        <mesh>
          <boxGeometry args={[3, 5, 7]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default BlueHome;
