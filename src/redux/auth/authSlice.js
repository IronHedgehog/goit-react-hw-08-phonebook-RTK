import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6214c5a789fad53b1f1e70c1.mockapi.io',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      providesTags: ['user'],
    }),
    login: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['user'],
    }),
    logOut: builder.mutation({
      query: user => ({
        url: '/users/logout',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useLogOutMutation } =
  authApi;
