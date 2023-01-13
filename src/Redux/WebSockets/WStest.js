import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { wsPORT } from './wsPORT';

const chanels = {
  chat: 'chat',
};

let ws = null;
function getSocket() {
  if (!ws) {
    ws = new WebSocket(wsPORT);
  }
  return ws;
}

export const testWsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    sendMessage: builder.mutation({
      queryFn: chatMessageContent => {
        const ws = getSocket();
        return new Promise(resolve => {
          ws.send('/', message => {
            resolve(JSON.stringify({ data: message }));
          });
        });
      },
    }),
    getMessages: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        photoId,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      ) {
        try {
          await cacheDataLoaded;
          const ws = getSocket();
          ws.addEventListener('connect', () => {
            ws.send('/', JSON.stringify({ message: 'connect' }));
          });
          ws.addEventListener('message', message => {
            updateCachedData(draft => {
              draft.push(JSON.parse(message));
            });
          });
          await cacheEntryRemoved;
          ws.close();
        } catch {
          // if cacheEntryRemoved resolved before cacheDataLoaded,
          // cacheDataLoaded throws
        }
      },
    }),

    // getTest: build.query({
    //   query: (channel = 'test') => `/`,
    //   async onCacheEntryAdded(
    //     channel,
    //     {
    //       dispatch, // Способ отправки в магазин
    //       getState, // получения текущего состояния магазина
    //       extra,
    //       requestId, // идентификатор, сгенерированный для записи кэша
    //       getCacheEntry, // текущее значение записи кэша
    //       updateCachedData,
    //       cacheDataLoaded, // Это позволяет вам awaitпока фактическое значение не окажется в кеше
    //       cacheEntryRemoved, // позволяет дождаться, когда запись в кеше будет удалена
    //     }
    //   ) {
    //     // создать соединение через веб-сокет при запуске подписки на кеш
    //     console.log('Redux ws start');
    //     let dataRes;
    //     try {
    //       // дождитесь разрешения исходного запроса, прежде чем продолжить
    //       await cacheDataLoaded;
    //       console.log('Redux cacheDataLoaded start');
    //       // когда данные получены из соединения сокета с сервером,
    //       // если это сообщение и для соответствующего канала,
    //       // обновляем результат нашего запроса полученным сообщением
    //       const listener = async event => {
    //         dataRes = await JSON.parse(event.data);
    //         if (dataRes.channel !== channel) return;
    //         updateCachedData(draft => {
    //           console.log('dataRes', dataRes);
    //           console.log('draft', draft);
    //           draft.push(dataRes);
    //         });
    //       };
    //       // ws.addEventListener('connection', listener);
    //       ws.addEventListener('message', listener);
    //       console.log('ws try');
    //     } catch {
    //       console.log('error catch');
    //       // no-op в случае, если `cacheEntryRemoved` разрешается до `cacheDataLoaded`,
    //       // в этом случае `cacheDataLoaded` выдаст
    //     }
    //     // cacheEntryRemoved разрешается, когда подписка на кеш больше не активна
    //     await cacheEntryRemoved;
    //     // выполнить действия по очистке после разрешения промиса `cacheEntryRemoved`
    //     ws.close();
    //     return dataRes;
    //   },
    // }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = testWsApi;
