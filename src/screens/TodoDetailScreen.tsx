import React from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTodoDetailScreen} from '../hooks/useTodoDetailScreen';

export const TodoDetailScreen = props => {
  const {id} = props.route.params;
  const {
    todoDetail,
    isLoading,
    todoTitle,
    onChangeTodoTitle,
    isCompleted,
    onStatusChange,
    isEditView,
    onDoneEditing,
    onEditPress,
  } = useTodoDetailScreen(id);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Todo Detail Screen</Text>
      <View style={styles.box}>
        {isEditView ? (
          <>
            <View style={styles.leftPane}>
              <Text>Todo:</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTodoTitle}
                value={todoTitle}
              />
              <Text>Status:</Text>
              <Switch
                trackColor={{false: '#767577', true: 'green'}}
                thumbColor="#f4f3f4"
                ios_backgroundColor="#3e3e3e"
                onValueChange={onStatusChange}
                value={isCompleted}
              />
            </View>
            <TouchableOpacity onPress={onDoneEditing}>
              <Text style={styles.edit}>Done</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View>
              <Text>Todo: {todoDetail?.title}</Text>
              <Text>
                Status: {todoDetail?.completed ? 'Completed' : 'In progress'}
              </Text>
            </View>
            <TouchableOpacity onPress={onEditPress}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  heading: {fontSize: 20, margin: 10},
  box: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 70,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  edit: {
    color: 'green',
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  leftPane: {width: '85%'},
});
