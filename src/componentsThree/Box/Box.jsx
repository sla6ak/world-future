import { useLoader } from '@react-three/fiber'; // frame это хук для анимаций
// import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import boxJpg from './box.jpg';
import boxJpgQ from './fds.jpg';
import { useBox } from '@react-three/cannon';
import { useState } from 'react';

const Box = props => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const textureBox = useLoader(TextureLoader, boxJpg);
  const textureBoxQ = useLoader(TextureLoader, boxJpgQ);
  const [refBox] = useBox(() => ({
    position: [0, 5, 0],
    mass: 1,
    ...props,
  }));

  return (
    <mesh
      ref={refBox}
      scale={hovered ? 1.5 : 1}
      onClick={e => setActive(!active)}
      onPointerEnter={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={active ? textureBox : textureBoxQ} />
    </mesh>
  );
};

export default Box;
