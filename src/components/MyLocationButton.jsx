import React, { useContext } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import RoundButton from './RoundButton';
import { CurrentLocationContext } from '../CurrentLocationContext';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

const MyLocationButton = () => {
  const [, setCurrentLocation] = useContext(CurrentLocationContext);

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
          setCurrentLocation(position.coords);
        }
      );
    } catch (error) {
      console.log('Error:-', error);
    }
  };

  return (
    <RoundButton
      icon="my-location"
      color="grey"
      handleClick={getCurrentPosition}
    />
  );
};

export default MyLocationButton;
