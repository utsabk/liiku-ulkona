import React from 'react';
import { View, StyleSheet } from 'react-native';

import SearchButton from '../components/SearchButton';
import MyLocationButton from '../components/MyLocationButton';
import Maps from '../components/Maps';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  },
});

const HomeScreen = () => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Maps />
      <View style={styles.buttonContainer}>
        <MyLocationButton />
        <SearchButton />
      </View>
    </View>
  );
};

export default HomeScreen;
