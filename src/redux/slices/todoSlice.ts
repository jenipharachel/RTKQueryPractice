import {createSlice} from '@reduxjs/toolkit';

export interface todo {
  userId: string;
  id: number | null;
  title: string;
  completed: boolean;
}

interface todoState {
  todoList: todo[] | null;
  // ... other state properties
}

const initialState: todoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodosListData: (state, {payload}) => {
      state.todoList = payload;
    },
  },
});

export default todoSlice.reducer;
