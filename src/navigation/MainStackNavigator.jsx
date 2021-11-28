import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import QRScanScreen from '../screens/QRScanScreen';
import UserScreen from '../screens/UserScreen';
import SearchScreen from '../screens/SearchScreen';
import ActivityDetailsScreen from '../screens/ActivityDetailsScreen';
import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';

import RootHeaderBar from './RootHeaderBar';
import ActivityHeaderBar from './ActivityHeaderBar';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerTitleAlign: 'center' }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: (props) => <RootHeaderBar {...props} /> }}
      />
      <Stack.Screen name="QRScan" component={QRScanScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen
        name="ActivityDetails"
        component={ActivityDetailsScreen}
        options={{ header: (props) => <ActivityHeaderBar {...props} /> }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
