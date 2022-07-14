import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LordGLB from '../../models/LordModel.glb';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';
import { useEffect } from 'react';
import { useSphere } from '@react-three/cannon';
import { Suspense } from 'react';

const SPEED = 3;

const AnotherLordModel = props => {
  console.log(props);
  // setMoveLord должен прилетать с сервера
  const [moveLord, setMoveLord] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });
  useEffect(() => {
    if (1 === 3) {
      setMoveLord();
    }
  }, []);
  const result = useLoader(GLTFLoader, LordGLB);
  const [ref, api] = useSphere(() => ({
    type: 'Dynamic',
    mass: 1,
    position: [0, -2, 0],
    matrixAutoUpdate: true,
    ...props,
  }));
  const velocity = useRef([0, 0, 0]); //скорость с сілкой на вектор центра карті

  useEffect(() => {
    const unsubscribeHero = api.velocity.subscribe(v => (velocity.current = v));
    return unsubscribeHero;
  }, [api.velocity]);

  useFrame(() => {
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveLord.moveBackward ? 1 : 0) - (moveLord.moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLord.moveLeft ? 1 : 0) - (moveLord.moveRight ? 1 : 0),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED);
    // .applyEuler(ref.rotation);
    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (moveLord.jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    }
  });
  return (
    <>
      <Suspense fallback={null}>
        <primitive ref={ref} object={result.scene} />
      </Suspense>
    </>
  );
};
export default AnotherLordModel;
