import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WS_PORT } from 'Redux/PORT'
const BASE_DRAFT = { data: {} }

async function waitFor(seconds) {
  return new Promise((resolve) => {
    const id = setTimeout(resolve, seconds * 1000)
    return clearTimeout(id)
  })
}

let ws = null
let token = ''
async function getSocket(token) {
  if (!ws) {
    try {
      return new Promise((resolve, reject) => {
        ws = new WebSocket(WS_PORT)
        ws.onopen = () => {
          console.log('connectWS+++')
          ws.send(
            JSON.stringify({
              channel: 'connect',
              data: {
                token
              }
            })
          )
          return resolve(ws)
        }
        ws.onerror = reject
        ws.onclose = () => {
          console.log('disconnectWS---')
          return reject
        }
      })
    } catch (error) {
      console.log('вебсокет неудается запустить:', error)
      await waitFor(20)
      return await getSocket(token)
    }
  }
  return ws
}

export const WS_BASE_API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),

  endpoints: (builder) => ({
    tagTypes: ['wsApi'],

    sendMessage: builder.mutation({
      queryFn: async (objRes) => {
        const ws = await getSocket(token)
        try {
          // eslint-disable-next-line no-new
          new Promise((resolve) => {
            resolve(ws.send(JSON.stringify(objRes)))
          })
        } catch (error) {
          console.log('ws.readyState', error)
        }
        return '+'
      }
    }),

    getMessages: builder.query({
      queryFn: async () => BASE_DRAFT,
      async onCacheEntryAdded(
        channel,
        {
          extra,
          requestId, // идентификатор, сгенерированный для записи кэша
          getCacheEntry, // текущее значение записи кэша
          getState, // получения текущего состояния магазина
          updateCachedData,
          cacheDataLoaded, // Это позволяет вам awaitпока фактическое значение не окажется в кеше
          cacheEntryRemoved // позволяет дождаться, когда запись в кеше будет удалена
        }
      ) {
        token = getState().auth.token
        const ws = await getSocket(token)
        try {
          await cacheDataLoaded
          ws.addEventListener('message', (message) => {
            const res = JSON.parse(message.data)

            updateCachedData((draft) => {
              draft.data = res
            })
          })
          await cacheEntryRemoved
          ws.close()
        } catch {
          console.log('Ошибка неудается получить ответ от WS')
          ws.close()
          // if cacheEntryRemoved resolved before cacheDataLoaded,
          // cacheDataLoaded throws
        }
      }
    })
  })
})

export const { useGetMessagesQuery, useSendMessageMutation } = WS_BASE_API
