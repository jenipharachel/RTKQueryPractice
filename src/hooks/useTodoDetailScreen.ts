import {useGetTodoDetailQuery} from '../apis/todoApi';

export const useTodoDetailScreen = (id: number) => {
  const {data: todoDetail, isLoading} = useGetTodoDetailQuery(id);

  return {
    todoDetail,
    isLoading,
  };
};
