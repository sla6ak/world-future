import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LordGLB from './LordModel.glb';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

const LordModel = () => {
  const result = useLoader(GLTFLoader, LordGLB);
  const refLord = useRef(); // в реф мы положим текущий куб это просто ссылка на меш
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    if (positionX > 50 || positionX < -50) {
      setPositionX(0);
    }
    if (positionY > 50 || positionY < -50) {
      setPositionY(0);
    }
  }, [positionX, positionY]);

  function keyDown(e) {
    //если нажали какую-то кнопку запишем в переменную это
    if (e.keyCode === 38 || e.keyCode === 87) {
      setPositionY(prevState => (prevState -= 0.3));
    } else if (e.keyCode === 65 || e.keyCode === 37) {
      setPositionX(prevState => (prevState -= 0.3));
    } else if (e.keyCode === 83 || e.keyCode === 40) {
      setPositionY(prevState => (prevState += 0.3));
    } else if (e.keyCode === 68 || e.keyCode === 39) {
      setPositionX(prevState => (prevState += 0.3));
    }
  }

  //   function keyUp(e) {
  //     //если отпустили кукую-то кнопку запишем в переменную это
  //     if (e.keyCode === 38 || e.keyCode === 87) {
  //       setPositionY(prevState => (prevState += 1));
  //     } else if (e.keyCode === 65 || e.keyCode === 37) {
  //       setPositionX(prevState => (prevState += 1));
  //     } else if (e.keyCode === 83 || e.keyCode === 40) {
  //       setPositionY(prevState => (prevState += 1));
  //     } else if (e.keyCode === 68 || e.keyCode === 39) {
  //       setPositionX(prevState => (prevState += 1));
  //     }
  //   }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    // window.addEventListener('keyup', keyUp);
  }, []);

  useFrame(({ clock }) => {
    // refLord.current.rotation.x -= 0.001;
  }, []);

  return (
    <primitive
      object={result.scene}
      ref={refLord}
      position={[positionX, -9, positionY]}
    />
  );
};
export default LordModel;
