import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import QRScanScreen from '../screens/QRScanScreen';
import UserScreen from '../screens/UserScreen';
import SearchScreen from '../screens/SearchScreen';
import HeaderBar from './HeaderBarNavigator';
import SearchBar from '../components/SearchBar';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: (props) => <HeaderBar {...props} /> }}
      />
      <Stack.Screen name="QRScan" component={QRScanScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ header: (props) => <SearchBar {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
