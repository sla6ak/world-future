import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PORT from './PORT';

// Define a service using a base URL and expected endpoints
export const languageAPI = createApi({
  reducerPath: 'languageAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT.port}language`,
  }),

  endpoints: builder => ({
    tagTypes: ['languageAPI'],
    getLanguage: builder.query({
      query: lang => ({
        url: `/${lang}`,
        method: 'GET',
      }),
      providesTags: ['languageAPI'],
      keepUnusedDataFor: 3,
    }),
  }),
});

export const { useGetLanguageQuery } = languageAPI;

// функция вытягивает из бекенда объект с текстом страниц описанием игры незванием кнопок и тому подобное на выбранном языке
// на беке положим несколько переводов по разным роутам при отсутствии интернета будем рендерить страницу на английском по умолчанию.
