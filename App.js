import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import Routes from './src/navigation/MainStackNavigator';
import { ActivitiesProvider } from './src/ActivitiesContext';

const App = () => {
  return (
    <ActivitiesProvider>
      <>
        <StatusBar backgroundColor={theme.colors.primary} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </>
    </ActivitiesProvider>
  );
};

export default App;
