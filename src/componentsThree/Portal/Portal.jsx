import { useRef } from 'react';
// import { useState } from 'react';
import { useGLTF } from '@react-three/drei';

const Portal = ({ ...props }) => {
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  const group = useRef();
  const { nodes, materials } = useGLTF('/models/time_machine/scene.gltf');
  return (
    <group ref={group} dispose={null} scale={0.1} {...props}>
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
