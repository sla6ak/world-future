import { useEffect } from 'react';
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from 'Redux/WebSockets/WStest';

export const useTestWSconnecting = () => {
  const { getCacheEntry, data, error } = useGetMessagesQuery();
  const [sendMessage] = useSendMessageMutation();

  useEffect(() => {
    if (error) return console.log('useTestWSconnecting error ws', error);
    console.log('hoock data', data);
  }, [data, error]);

  useEffect(() => {
    console.log('getCacheEntry', getCacheEntry);
  }, [getCacheEntry]);

  return { sendMessage };
};
