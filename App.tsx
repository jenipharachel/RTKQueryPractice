import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppNavigator} from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <AppNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
