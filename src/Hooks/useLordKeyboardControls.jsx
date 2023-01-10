import { useState, useEffect } from 'react';

function actionByKey(key) {
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
  };
  return keys[key];
}

export const useLordKeyboardControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = e => {
      // Movement key
      if (actionByKey(e.code)) {
        setMovement(state => {
          if (e.code === 'Space' && state.jump === true) {
            return {
              ...state,
              [actionByKey(e.code)]: false,
            };
          }
          return {
            ...state,
            [actionByKey(e.code)]: true,
          };
        });
      }
    };
    const handleKeyUp = e => {
      if (actionByKey(e.code)) {
        setMovement(state => ({
          ...state,
          [actionByKey(e.code)]: false,
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};

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
