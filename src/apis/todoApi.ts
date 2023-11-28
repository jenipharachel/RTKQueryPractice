import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['todos'],
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
      invalidatesTags: ['todos'],
    }),
    updateTodo: builder.mutation({
      query: ({id, updatedTodo}) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: updatedTodo,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoDetailQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
