import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PORT } from 'Redux/PORT'

export const API_BASE_SERVER = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),

  endpoints: builder => ({
    tagTypes: ['authApi', 'languageAPI', 'personApi'],
    // функция вытягивает из бекенда объект с текстом страниц описанием игры незванием кнопок и тому подобное на выбранном языке
    // на беке положим несколько переводов по разным роутам при отсутствии интернета будем рендерить страницу на английском по умолчанию.
    getLanguage: builder.query({
      query: lang => ({
        url: `language/${lang}`,
        method: 'GET'
      }),
      providesTags: ['languageAPI'],
      keepUnusedDataFor: 3
    }),
    // авторизация юзера
    getIsActivUser: builder.query({
      query: () => ({
        url: 'auth/current',
        method: 'GET'
      }),
      providesTags: ['authApi']
    }),
    registrationUser: builder.mutation({
      query: newUser => ({
        url: 'auth/signup',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['authApi']
    }),

    loginUser: builder.mutation({
      query: userData => ({
        url: 'auth/login',
        method: 'POST',
        body: userData
      }),
      invalidatesTags: ['authApi']
    }),
    // после регистрации создаем персонажа игроку
    // работать с персонажем предлогаю смешанно как через фетч запросы так и через вебсокеты.
    getMyPerson: builder.query({
      query: () => ({
        url: 'lord/',
        method: 'GET'
      }),
      providesTags: ['personApi'],
      keepUnusedDataFor: 3
    }),

    chooseCurentPlanet: builder.mutation({
      query: planet => ({
        url: 'lord/',
        method: 'PATCH',
        body: planet
      }),
      invalidatesTags: ['personApi'],
      keepUnusedDataFor: 3
    }),

    registrationPerson: builder.mutation({
      query: newNik => ({
        url: 'lord/',
        method: 'POST',
        body: newNik
      }),
      invalidatesTags: ['personApi']
    })
  })
})
export const {
  useGetIsActivUserQuery,
  useRegistrationUserMutation,
  useLoginUserMutation,
  useGetLanguageQuery,
  useGetMyPersonQuery,
  useChooseCurentPlanetMutation,
  useRegistrationPersonMutation
} = API_BASE_SERVER
