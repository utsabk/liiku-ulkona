import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './src/theme';
import Routes from './src/navigation/MainStackNavigator';

import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
