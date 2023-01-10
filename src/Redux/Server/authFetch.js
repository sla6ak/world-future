import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PORT from './PORT';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT.port}auth`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    tagTypes: ['curentUser'],
    getIsActivUser: builder.query({
      query: () => ({
        url: `/current`,
        method: 'GET',
      }),
    }),
    registrationUser: builder.mutation({
      query: newUser => ({
        url: '/signup',
        method: 'POST',
        body: newUser,
      }),
    }),

    loginUser: builder.mutation({
      query: userData => ({
        url: `/login`,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetIsActivUserQuery,
  useRegistrationUserMutation,
  useLoginUserMutation,
} = authApi;
