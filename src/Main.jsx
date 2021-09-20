import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import Text from './components/Text';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
     <Text>Welcome !</Text>
      <Text fontWeight="bold" fontSize="subheading">
         Liiku Ulkona.
      </Text>
      <Text color="textSecondary">New features coming soon..</Text>   
    </View>
  );
};

export default Main;
