import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Todo = ({todo}) => {
  return (
    <View style={styles.container} key={todo.id}>
      <Text style={{flex: 3}}>
        {todo.id}. {todo.title}
      </Text>
      <Text>{todo.completed ? 'Completed' : 'In progress'}</Text>
    </View>
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
