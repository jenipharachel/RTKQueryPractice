import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LandingScreen} from '../screens/LandingScreen';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <LandingScreen />
    </NavigationContainer>
  );
};
