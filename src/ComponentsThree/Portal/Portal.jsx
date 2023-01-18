import { useRef } from 'react';
// import { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  newOpenCanvasModal,
  onHoverCanvasModal,
  ofHoverCanvasModal,
} from 'Redux/Slises/openCanvasModalSlise';

const Portal = ({ ...props }) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/time_machine/scene.gltf');
  const onClickObj = () => {
    dispatch(
      newOpenCanvasModal({
        isClick: true,
        isHover: false,
        ObjPosition: {},
        timerOpen: 5000,
        info: {
          title: 'The Star Gate',
          typeObj: 'history',
          shortInfo:
            'Врата построенные неизвестной цивилизацией позволяют путешествовать по вселенной',
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
        info: {
          title: 'The Star Gate',
          shortInfo:
            'Врата построенные неизвестной цивилизацией позволяют путешествовать по вселенной',
        },
      })
    );
    setActive(!active);
  };
  const offHoverObj = () => {
    setHover(false);
    dispatch(
      ofHoverCanvasModal({
        isClick: false,
        isHover: false,
        ObjPosition: {},
        info: {
          title: 'The Star Gate',
          shortInfo:
            'Врата построенные неизвестной цивилизацией позволяют путешествовать по вселенной',
        },
      })
    );
    setActive(!active);
  };

  return (
    <group
      ref={group}
      onPointerDown={e => {
        onClickObj();
      }}
      onPointerEnter={e => {
        onHoverObj();
      }}
      onPointerOut={e => {
        offHoverObj();
      }}
      dispose={null}
      scale={hovered ? 0.102 : 0.1}
      {...props}
    >
      <directionalLight color="#1d68f3" />
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
          material-color={'#5a89a5'}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/time_machine/scene.gltf');

export default Portal;
