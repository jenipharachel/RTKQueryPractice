import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppNavigator} from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
