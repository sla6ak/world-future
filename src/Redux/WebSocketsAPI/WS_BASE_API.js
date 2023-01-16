import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WS_PORT } from 'Redux/PORT';
const BASE_DRAFT = { data: {} };
const channels = [
  'chat',
  'planetaBlueHome',
  'planetaYellowHome',
  'planetaLostWorld',
  'missions',
  'myLord',
  'connect',
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
      queryFn: objRes => {
        const ws = getSocket();
        new Promise(resolve => {
          resolve(ws.send(JSON.stringify(objRes)));
        });
        return '1';
      },
    }),

    getMessages: builder.query({
      queryFn: () => BASE_DRAFT,
      async onCacheEntryAdded(
        channel,
        {
          extra,
          requestId, // идентификатор, сгенерированный для записи кэша
          getCacheEntry, // текущее значение записи кэша
          getState, // получения текущего состояния магазина
          updateCachedData,
          cacheDataLoaded, // Это позволяет вам awaitпока фактическое значение не окажется в кеше
          cacheEntryRemoved, // позволяет дождаться, когда запись в кеше будет удалена
        }
      ) {
        try {
          await cacheDataLoaded;
          const ws = getSocket();
          ws.addEventListener('open', () => {
            ws.send(
              JSON.stringify({
                channel: 'connect',
                data: { token: getState().auth.token },
              })
            );
          });

          ws.addEventListener('message', message => {
            const res = JSON.parse(message.data);
            if (!channels.includes(res.channel)) return;

            updateCachedData(draft => {
              draft.data = res;
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
