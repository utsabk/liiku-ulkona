import React from 'react';
import { View, StyleSheet } from 'react-native';

import Maps from '../components/Maps';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink:1,
  },
});


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Maps />
    </View>
  );
};

export default HomeScreen;
