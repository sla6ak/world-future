import { useEffect } from 'react';
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from 'Redux/WebSocketsAPI/WS_BASE_API';
import { isMult } from 'Redux/Slises/mult';
import { useDispatch } from 'react-redux';

export const useWsConnecting = () => {
  const { data: dataWS, error } = useGetMessagesQuery();
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const dispath = useDispatch();

  useEffect(() => {
    if (!dataWS?.data) return;
    if (!!isLoading) return;
    const { data } = dataWS;
    if (data.channel === 'connect') {
      if (data.isMult) {
        return;
      }
      console.log(data);
    }
    if (data.channel === 'chat') {
      if (!data.data) {
        return;
      }
      console.log(data);
    }
    if (data.channel === 'planetaBlueHome') {
      if (!data.data) {
        return;
      }
      console.log(data);
    }
    if (data.channel === 'planetaYellowHome') {
      if (!data.data) {
        return;
      }
      console.log(data);
    }
    if (data.channel === 'planetaLostWorld') {
      if (!data.data) {
        return;
      }
      console.log(data);
    }
    if (data.channel === 'missions') {
      if (!data.data) {
        return;
      }
      console.log(data);
    }
    if (data.channel === 'myLord') {
      if (!data.data) {
        return;
      }
      console.log(data);
    }
    if (data.isMult) {
      dispath(isMult(data.isMult));
      return;
    }
    if (data.allState) {
      // dispath();
      return;
    }
  }, [dataWS, dispath, isLoading]);

  useEffect(() => {
    if (!error) return;
    return console.log('useTestWSconnecting error ws', error);
  }, [error]);

  return { sendMessage };
};
