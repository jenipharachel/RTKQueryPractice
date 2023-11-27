import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {useLandingScreen} from '../hooks/useLandingScreen';
import {Todo} from '../components/Todo';

export const LandingScreen = () => {
  const {todoList, isLoading} = useLandingScreen();

  const renderItem = ({item}) => <Todo key={item.id} todo={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todos</Text>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList data={todoList} renderItem={renderItem} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
