import React, { useEffect } from 'react';
import { PointerLockControls as PointerLockControlsImpl } from 'three/examples/jsm/controls/PointerLockControls';
import { useThree, extend } from '@react-three/fiber';
import { useRef } from 'react';

extend({ PointerLockControlsImpl });

export const PointerCameraController = props => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    if (controls) {
      document.addEventListener('click', () => {
        controls.current.lock();
        // console.log(controls.pointer);
      });
    }
  }, []);

  return (
    <pointerLockControlsImpl
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
