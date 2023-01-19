import { useLoader } from '@react-three/fiber'; // frame это хук для анимаций
// import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import boxJpg from './box.jpg';
import boxJpgQ from './fds.jpg';
import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  newOpenCanvasModal,
  onHoverCanvasModal,
  ofHoverCanvasModal,
} from 'Redux/Slises/openCanvasModalSlise';

const Box = props => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const textureBox = useLoader(TextureLoader, boxJpg);
  const textureBoxQ = useLoader(TextureLoader, boxJpgQ);
  const [refBox] = useBox(() => ({
    position: [0, 5, 0],
    mass: 1,
    ...props,
  }));

  const onClickObj = () => {
    dispatch(
      newOpenCanvasModal({
        isClick: true,
        isHover: false,
        typeObj: 'box',
        ObjPosition: {},
        timerOpen: 5000,
        info: {
          title: 'The Box',
          typeObj: 'history',
          shortInfo: 'Пустая старая коробка',
          moreInfo: '',
        },
      })
    );
    setActive(!active);
  };
  const onHoverObj = () => {
    setHover(true);
    dispatch(
      onHoverCanvasModal({
        isClick: false,
        isHover: true,
        ObjPosition: {},
        info: { title: 'The Box', shortInfo: '' },
      })
    );
    setActive(!active);
  };
  const offHoverObj = () => {
    setHover(false);
    dispatch(
      ofHoverCanvasModal({
        isHover: false,
        ObjPosition: {},
        info: { title: 'The Box', shortInfo: '' },
      })
    );
    setActive(!active);
  };

  return (
    <mesh
      ref={refBox}
      scale={hovered ? 0.6 : 0.5}
      onPointerDown={e => {
        onClickObj();
      }}
      onPointerEnter={e => {
        onHoverObj();
      }}
      onPointerOut={e => {
        offHoverObj();
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={active ? textureBox : textureBoxQ} />
    </mesh>
  );
};

export default Box;
