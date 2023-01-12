import { useEffect } from 'react';
import { useGetTestQuery } from 'Redux/WebSockets/WStest';

export const useTestWSconnecting = () => {
  useGetTestQuery();
  useEffect(() => {}, []);

  return {};
};
