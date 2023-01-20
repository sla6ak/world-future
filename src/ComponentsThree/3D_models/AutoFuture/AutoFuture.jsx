import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const AutoFuture = ({ props }) => {
  const refGroup = useRef();
  const { nodes, materials } = useGLTF('/models/avto-future/scene.gltf');

  useFrame(state => {
    const t = state.clock.getElapsedTime();
    let sinM = Math.sin(t / 5);
    let pike = 1 - (1 + sinM) * 10; // вращение пикеты
    let where = (1 + sinM) * 500;
    refGroup.current.rotation.z = pike;
    refGroup.current.rotation.x = Math.cos(t / 4) / 8;
    refGroup.current.position.y = (1.3 + Math.sin(t / 2)) * 10;
    // refGroup.current.position.x = (1 + Math.sin(t / 4.5)) * 5;
    if (where > refGroup.current.position.z) {
      refGroup.current.rotation.y = 0; // 0||p
    } else {
      refGroup.current.rotation.y = 3.14; // 0||p
    }
    refGroup.current.position.z = where;
  });

  return (
    <group ref={refGroup} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.blocker}
            material-color={'#49afce'}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.blocker}
          />
          <mesh geometry={nodes.Object_8.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.body} />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.glass}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.headlight}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.tailight}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/avto-future/scene.gltf');
export default AutoFuture;
