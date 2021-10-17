import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../pages/HomeScreen';
import Settings from '../pages/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

const tabOptions = {
  home: {
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="home" size={24} color={color} />
    ),
  },
  settings: {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="settings" size={24} color={color} />
    ),
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#3C74C7' }}
    >
      <Tab.Screen name="Home" component={Home} options={tabOptions.home} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={tabOptions.settings}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
