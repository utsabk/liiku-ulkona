import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import Routes from './src/navigation/MainStackNavigator';
import { ActivitiesProvider } from './src/ActivitiesContext';
import { ActivityDetailsProvider } from './src/ActivityDetailsContext';

const App = () => {
  return (
    <ActivitiesProvider>
      <ActivityDetailsProvider>
        <>
          <StatusBar backgroundColor={theme.colors.primary} />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </>
      </ActivityDetailsProvider>
    </ActivitiesProvider>
  );
};

export default App;
