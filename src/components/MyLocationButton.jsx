import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { useDispatch } from 'react-redux';
import { getUserLocation } from '../store/actions/userLocation';
import RoundButton from './RoundButton';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

const MyLocationButton = () => {
  const dispatch = useDispatch();

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
          dispatch(getUserLocation(position.coords));
        }
      );
    } catch (error) {
      throw new Error('Error geting user location');
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
