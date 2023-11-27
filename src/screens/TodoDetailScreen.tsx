import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTodoDetailScreen} from '../hooks/useTodoDetailScreen';

export const TodoDetailScreen = props => {
  const {id} = props.route.params;
  const {todoDetail, isLoading} = useTodoDetailScreen(id);

  console.log(todoDetail, 'todoDetail', isLoading);

  return (
    <View>
      <Text style={styles.heading}> Todo Detail Screen</Text>
      <View style={styles.box}>
        <View>
          <Text>Todo: {todoDetail.title}</Text>
          <Text>
            Status: {todoDetail.completed ? 'Completed' : 'In progress'}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {fontSize: 20},
  box: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    color: 'green',
  },
});
