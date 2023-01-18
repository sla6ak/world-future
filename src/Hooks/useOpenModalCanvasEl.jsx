// при клике на любой канвас элемент достаточно описать стейт и задиспатчить модалки и хук его развернет и закроет по таймингу указаному в стейте

// import { Vector3 } from 'three';
// import { useThree, useFrame } from '@react-three/fiber';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeCanvasModal } from 'Redux/Slises/openCanvasModalSlise';
import { useSelector } from 'react-redux';

export const useOpenModalCanvasEl = () => {
  const { isClick, isHover, timerOpen } = useSelector(
    state => state.openCanvasModal
  );
  const dispatch = useDispatch();
  // const modalPosition = new Vector3();
  // const modalPositionOffSet = new Vector3();
  // const Y_AXIS = new Vector3(0, 1, 0);

  useEffect(() => {
    if (!isClick && !isHover) return;
    const modalWrapperElement = document.getElementById('modalcanvaswrapper');
    const canvas = document.querySelector('canvas');
    // modalPositionOffSet.copy(ObjPosition.position);
    // modalPositionOffSet.sub(camera.position);
    // modalPositionOffSet.normalize();
    // modalPositionOffSet.applyAxisAngle(Y_AXIS, -Math.PI / 2);
    // modalPositionOffSet.multiplyScalar(0.5);
    // modalPositionOffSet.y = 1.5;

    // modalPositionOffSet.setFromMatrixPosition(ObjPosition.matrixWorld);
    // modalPositionOffSet.add(modalPosition);
    // modalPositionOffSet.project(camera);

    // modalWrapperElement.style.top = `${modalPosition.y}px`;
    // modalWrapperElement.style.left = `${modalPosition.x}px`;

    modalWrapperElement.style.top = `${canvas.height / 6}px`;
    modalWrapperElement.style.left = `${canvas.width / 2.3}px`;

    if (!isClick) return;
    const timerId = setTimeout(() => {
      dispatch(closeCanvasModal());
      return clearTimeout(timerId);
    }, timerOpen);
  }, [dispatch, isClick, timerOpen, isHover]);
  // const { camera } = useThree();
};