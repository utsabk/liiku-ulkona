import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import Routes from './src/navigation/MainStackNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
