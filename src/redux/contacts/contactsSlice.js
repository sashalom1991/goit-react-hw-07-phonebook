import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const сontactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61917de041928b0017690084.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery } = сontactApi;
