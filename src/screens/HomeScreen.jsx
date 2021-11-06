import React from 'react';
import { View, StyleSheet } from 'react-native';

import SearchButton from '../components/SearchButton';
import MyLocationButton from '../components/MyLocationButton';
import Maps from '../components/Maps';
import { CurrentLocationProvider } from '../CurrentLocationContext';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <CurrentLocationProvider>
        <Maps navigation={navigation} />
        <View style={styles.buttonContainer}>
          <MyLocationButton />
          <SearchButton navigation={navigation} />
        </View>
      </CurrentLocationProvider>
    </View>
  );
};

export default HomeScreen;
