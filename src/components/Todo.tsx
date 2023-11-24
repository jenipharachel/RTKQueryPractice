import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Todo = ({todo}) => {
  return (
    <View style={styles.container} key={todo.id}>
      <Text>
        {todo.id}. {todo.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'lightblue',
  },
});
