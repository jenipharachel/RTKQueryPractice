import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => ({
        url: '/todos/',
        method: 'Get',
      }),
    }),
    createTodo: builder.mutation({
      query: body => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useGetTodosQuery, useCreateTodoMutation} = todoApi;
