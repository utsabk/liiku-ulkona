import React, { useState } from 'react';
import MapView from 'react-native-maps';

import { Platform, View, Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import LocationMarker from '../components/LocationMarker';
import RoundButton from '../components/RoundButton';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  },
});
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialLocation = {
  latitude: 60.2205088,
  longitude: 24.9379047,
};

const Maps = () => {
  const [location, setLocation] = useState(null);

  const getCurrentPosition = async () => {
    try {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        throw new Error(
          'Oops, This will not work in an Android emulator. Try it on your device!'
        );
      }
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      await watchPositionAsync(
        { accuracy: Accuracy.BestForNavigation, distanceInterval: 2000 },
        (position) => {
          console.log('Position', position.coords);
          setLocation(position.coords);
        }
      );
    } catch (error) {
      console.log('Error:-', error);
    }
  };
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialLocation,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {location && <LocationMarker coordinate={location} />}
      </MapView>
      <View style={styles.buttonContainer}>
        <RoundButton icon="my-location" handleClick={getCurrentPosition} />
        <RoundButton icon="search" />
      </View>
    </View>
  );
};

export default Maps;
