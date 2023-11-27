import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Todo = ({todo}) => {
  const navigation = useNavigation();

  const navigateToDetailScreen = () =>
    navigation.navigate('TodoDetailScreen', {id: todo.id});

  console.log('component ', todo);

  return (
    <TouchableOpacity
      style={styles.container}
      key={todo.id}
      onPress={navigateToDetailScreen}>
      <Text style={{flex: 3}}>
        {todo.id}. {todo.title}
      </Text>
      <Text>{todo.completed ? 'Completed' : 'In progress'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
