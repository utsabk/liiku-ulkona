import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Maps from './pages/Maps';
import FavouritesScreen from './pages/FavouritesScreen';
import QRScanScreen from './pages/QRScanScreen';
import UserScreen from './pages/UserScreen';
import HeaderBar from './components/HeaderBar';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Maps">
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{ header: (props) => <HeaderBar {...props} /> }}
      />
      <Stack.Screen name="QRScan" component={QRScanScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
