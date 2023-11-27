import React from 'react';
import {LandingScreen} from '../screens/LandingScreen';
import {TodoDetailScreen} from '../screens/TodoDetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
