import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useLandingScreen} from '../hooks/useLandingScreen';
import {Todo} from '../components/Todo';

export const LandingScreen = () => {
  const {todoList, isLoading} = useLandingScreen();

  const renderItem = ({item}) => <Todo key={item.id} todo={item} />;

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList data={todoList} renderItem={renderItem} />
      )}
    </View>
  );
};
