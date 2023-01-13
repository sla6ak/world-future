import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WS_PORT } from 'Redux/PORT';

const chanals = [
  'chat',
  'planetaBlueHome',
  'planetaYellowHome',
  'planetaLostWorld',
  'missions',
  'myLord',
];

let ws = null;
function getSocket() {
  if (!ws) {
    ws = new WebSocket(WS_PORT);
  }
  return ws;
}

export const WS_BASE_API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),

  endpoints: builder => ({
    tagTypes: ['wsApi'],

    sendMessage: builder.mutation({
      queryFn: ({ canel = 'chat', data = {} }) => {
        const ws = getSocket();
        new Promise(resolve => {
          resolve(ws.send(JSON.stringify({ canel, data })));
        });
        return '1';
      },
    }),

    getMessages: builder.query({
      queryFn: () => ({
        data: [
          { chanal: 'chat', data: {} },
          { chanal: 'planetaBlueHome', data: {} },
          { chanal: 'planetaYellowHome', data: {} },
          { chanal: 'planetaLostWorld', data: {} },
          { chanal: 'missions', data: {} },
          { chanal: 'myLord', data: {} },
        ],
      }),
      async onCacheEntryAdded(
        channel,
        {
          dispatch, // Способ отправки в магазин
          getState, // получения текущего состояния магазина
          extra,
          requestId, // идентификатор, сгенерированный для записи кэша
          getCacheEntry, // текущее значение записи кэша
          updateCachedData,
          cacheDataLoaded, // Это позволяет вам awaitпока фактическое значение не окажется в кеше
          cacheEntryRemoved, // позволяет дождаться, когда запись в кеше будет удалена
        }
      ) {
        try {
          await cacheDataLoaded;
          const ws = getSocket();
          ws.addEventListener('connect', () => {
            ws.send(JSON.stringify({ message: 'connect' }));
          });
          ws.addEventListener('message', message => {
            const res = JSON.parse(message.data);
            if (!chanals.includes(res.chanal)) return;
            // console.log(res);
            updateCachedData(draft => {
              draft.push(res);
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
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = WS_BASE_API;
