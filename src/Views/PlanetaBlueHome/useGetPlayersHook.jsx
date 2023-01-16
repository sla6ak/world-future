import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSendMessageMutation } from 'Redux/WebSocketsAPI/WS_BASE_API';
// positionX: { type: Number },
//     positionY: { type: Number },
//     positionZ: { type: Number },
export const useGetPlayersHook = () => {
  const [sendMessage] = useSendMessageMutation();
  // изначально переполучал весь объект но должен быть переработан и перезаписывать только измененные данные
  const { lordInfo } = useSelector(state => state);
  // ВАЖНО это работает если в монго дб мы не перезаписываем позицию игроков ежесекундно а только при изменениях планеты или выходе.
  useEffect(() => {
    if (!lordInfo) {
      return;
    }
    sendMessage({
      channal: 'planetaBlueHome',
      data: {
        nikName: '',
        position: {
          x: lordInfo.positionX,
          y: lordInfo.positionY,
          z: lordInfo.positionZ,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return;
};
