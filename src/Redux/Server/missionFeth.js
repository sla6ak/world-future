import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PORT from './PORT';

// Define a service using a base URL and expected endpoints
export const missionApi = createApi({
  reducerPath: 'missionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PORT.port}mission`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    tagTypes: ['missionApi'],

    getPandingMissions: builder.query({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['missionApi'],
      keepUnusedDataFor: 3,
    }),

    addMission: builder.mutation({
      query: newMassage => ({
        url: '/',
        method: 'POST',
        body: newMassage,
      }),
      invalidatesTags: ['missionApi'],
      keepUnusedDataFor: 3,
    }),
  }),
});

export const { useGetPandingMissionsQuery, useAddMissionMutation } = missionApi;
