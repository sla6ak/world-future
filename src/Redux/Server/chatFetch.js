import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PORT from './PORT';

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT.port}chat`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    tagTypes: ['chatApi'],
    getAllChat: builder.query({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['chatApi'],
      keepUnusedDataFor: 3,
    }),

    getClanChat: builder.query({
      query: id => ({
        url: `/clan/:${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['chatApi'],
      keepUnusedDataFor: 3,
    }),

    createMassage: builder.mutation({
      query: newMassage => ({
        url: '/',
        method: 'POST',
        body: newMassage,
      }),
      invalidatesTags: ['chatApi'],
      keepUnusedDataFor: 3,
    }),
  }),
});

export const {
  useGetAllChatQuery,
  useGetClanChatQuery,
  useCreateMassageMutation,
} = chatApi;
