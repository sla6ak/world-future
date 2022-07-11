import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const PORT = 'https://world-future.herokuapp.com';
// const PORT = 'http://localhost:5000';

// Define a service using a base URL and expected endpoints
export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT}/lord`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    tagTypes: ['personApi'],
    getMyPerson: builder.query({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['personApi'],
      keepUnusedDataFor: 3,
    }),

    chooseCurentPlanet: builder.mutation({
      query: planet => ({
        url: '/',
        method: 'PATCH',
        body: planet,
      }),
      invalidatesTags: ['personApi'],
      keepUnusedDataFor: 3,
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

export const {
  useGetMyPersonQuery,
  useChooseCurentPlanetMutation,
  useRegistrationPersonMutation,
} = personApi;
