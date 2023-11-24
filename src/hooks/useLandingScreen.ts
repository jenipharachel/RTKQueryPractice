import {useGetTodosQuery} from '../apis/todoApi';

export const useLandingScreen = () => {
  const {data: todoList, isLoading} = useGetTodosQuery(null);

  return {
    todoList,
    isLoading,
  };
};
