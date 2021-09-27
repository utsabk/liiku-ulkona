import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Platform, View, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  myLocationButton: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    padding: 15,
    elevation: 3,
    borderRadius: 50,
  },
});

const regionFinland = {
  latitude: 64.170798,
  longitude: 25.939867,
  latitudeDelta: 0,
  longitudeDelta: 20,
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
      <MapView style={styles.map} region={regionFinland}>
        {location && (
          <MapView.Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        )}
      </MapView>
      <Pressable style={styles.myLocationButton} onPress={getCurrentPosition}>
        <MaterialIcons name="my-location" size={24} color="grey" />
      </Pressable>
    </View>
  );
};

export default Maps;
