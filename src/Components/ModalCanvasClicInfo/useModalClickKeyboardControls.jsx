import { useState, useEffect } from 'react';
import { useSendMessageMutation } from 'Redux/WebSocketsAPI/WS_BASE_API';
import { useSelector } from 'react-redux';

export const useModalClickKeyboardControls = () => {
  const { lordInfo } = useSelector(state => state);
  const [jumpToPlanet, setJumpToPlanet] = useState({
    LostWorld: false,
    BlueHome: false,
    YellowHome: false,
  });
  const [sendMessage] = useSendMessageMutation();

  useEffect(() => {
    function actionByKey(key) {
      let home = 'BlueHome';
      if (lordInfo.raca === 'Blue') {
        home = 'BlueHome';
      } else {
        home = 'YellowHome';
      }
      const keys = {
        KeyG: 'LostWorld',
        KeyH: home,
      };
      return keys[key];
    }
    const handleKeyDown = e => {
      if (actionByKey(e.code)) {
        setJumpToPlanet(state => {
          return {
            ...state,
            [actionByKey(e.code)]: true,
          };
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lordInfo.raca]);

  useEffect(() => {
    sendMessage({ channel: 'myLord', data: { planet: '' } });
  }, [jumpToPlanet, sendMessage]);
};
