import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => ({
        url: '/todos/',
        method: 'GET',
      }),
    }),
    getTodoDetail: builder.query({
      query: id => ({
        url: `/todos/${id}`,
        method: 'GET',
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

export const {useGetTodosQuery, useGetTodoDetailQuery, useCreateTodoMutation} =
  todoApi;
