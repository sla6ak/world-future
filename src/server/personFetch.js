import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const PORT = 'https://world-future.herokuapp.com';

// Define a service using a base URL and expected endpoints
export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT}/person`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    tagTypes: ['person'],
    getMyPerson: builder.query({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      invalidatesTags: ['personApi'],
    }),

    registrationPerson: builder.mutation({
      query: newNik => ({
        url: '/',
        method: 'POST',
        body: newNik,
      }),
      invalidatesTags: ['personApi'],
    }),
  }),
});

export const { useGetMyPersonQuery, useRegistrationPersonMutation } = personApi;
