import {useState} from 'react';
import {useGetTodoDetailQuery, useUpdateTodoMutation} from '../apis/todoApi';
import {useNavigation} from '@react-navigation/native';

export const useTodoDetailScreen = (id: number) => {
  const {data: todoDetail, isLoading} = useGetTodoDetailQuery(id);
  const [updateTodo, {isError, isSuccess, data, error}] =
    useUpdateTodoMutation();

  const [todoTitle, setTodoTitle] = useState(todoDetail?.title || '');
  const [isCompleted, setIsCompleted] = useState(todoDetail?.completed);
  const [isEditView, setIsEditView] = useState(false);

  const navigation = useNavigation();

  const onChangeTodoTitle = (text: string) => setTodoTitle(text);
  const onStatusChange = (bool: boolean) => setIsCompleted(bool);

  const onDoneEditing = async () => {
    const updatedTodo = {
      userId: todoDetail?.userId,
      id: todoDetail?.id,
      title: todoTitle,
      completed: isCompleted,
    };

    await updateTodo({id: todoDetail?.id, updatedTodo});
    setIsEditView(false);
    navigation.goBack();
  };

  const onEditPress = () => setIsEditView(true);

  return {
    todoDetail,
    isLoading,
    todoTitle,
    onChangeTodoTitle,
    isCompleted,
    onStatusChange,
    isEditView,
    onDoneEditing,
    onEditPress,
  };
};
