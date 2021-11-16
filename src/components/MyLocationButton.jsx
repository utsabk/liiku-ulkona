import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserLocation } from '../store/actions/user';
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
