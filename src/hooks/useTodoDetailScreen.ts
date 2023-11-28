import {useState} from 'react';
import {useGetTodoDetailQuery} from '../apis/todoApi';

export const useTodoDetailScreen = (id: number) => {
  const {data: todoDetail, isLoading} = useGetTodoDetailQuery(id);
  const [todoTitle, setTodoTitle] = useState(todoDetail?.title || '');
  const [isCompleted, setIsCompleted] = useState(todoDetail?.completed);

  const onChangeTodoTitle = (text: string) => setTodoTitle(text);
  const onStatusChange = (bool: boolean) => setIsCompleted(bool);

  return {
    todoDetail,
    isLoading,
    todoTitle,
    onChangeTodoTitle,
    isCompleted,
    onStatusChange,
  };
};
