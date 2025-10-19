import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petCareApi = createApi({
  reducerPath: 'petCareApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/', // Mock API for demo
  }),
  tagTypes: ['Client'],
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => 'users',
      providesTags: ['Client'],
    }),
    getClientById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ['Client'],
    }),
    createClient: builder.mutation({
      query: (clientData) => ({
        url: 'users',
        method: 'POST',
        body: clientData,
      }),
      invalidatesTags: ['Client'],
    }),
    updateClient: builder.mutation({
      query: ({ id, ...clientData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: clientData,
      }),
      invalidatesTags: ['Client'],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Client'],
    }),
  }),
});

export const {
  useGetClientsQuery,
  useGetClientByIdQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = petCareApi;
