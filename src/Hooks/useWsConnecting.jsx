import { useEffect } from 'react';
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from 'Redux/WebSocketsAPI/WS_BASE_API';

export const useWsConnecting = () => {
  const { data, error } = useGetMessagesQuery();
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  useEffect(() => {
    if (!data) return;
    if (!!isLoading) return;
    // return console.log('hoock data', data);
  }, [data, isLoading]);

  useEffect(() => {
    if (!error) return;
    return console.log('useTestWSconnecting error ws', error);
  }, [error]);

  return { sendMessage };
};
