import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { wsPORT } from './wsPORT';
// тоесть тут мы поднимает соединение сокетов для разных каналов по сути плодим сокеты для одновременных чатов

export const testWsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: build => ({
    getTest: build.query({
      query: () => `test/`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // создать соединение через веб-сокет при запуске подписки на кеш
        const ws = new WebSocket(wsPORT);
        try {
          // дождитесь разрешения исходного запроса, прежде чем продолжить
          await cacheDataLoaded;

          // когда данные получены из соединения сокета с сервером,
          // если это сообщение и для соответствующего канала,
          // обновляем результат нашего запроса полученным сообщением
          const listener = event => {
            const data = JSON.parse(event.data);
            if (data.channel !== arg) return;

            updateCachedData(draft => {
              draft.push(data);
            });
          };

          ws.addEventListener('message', listener);
        } catch {
          // no-op в случае, если `cacheEntryRemoved` разрешается до `cacheDataLoaded`,
          // в этом случае `cacheDataLoaded` выдаст
        }
        // cacheEntryRemoved разрешается, когда подписка на кеш больше не активна
        await cacheEntryRemoved;
        // выполнить действия по очистке после разрешения промиса `cacheEntryRemoved`
        ws.close();
      },
    }),
  }),
});

export const { useGetTestQuery } = testWsApi;
