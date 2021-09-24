import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';


const styles = StyleSheet.create({
  map: {
    height: '100%',
    padding: 20,

  },

});

const regionFinland = {
  latitude: 64.170798,
  longitude: 25.939867,
  latitudeDelta: 0,
  longitudeDelta: 20,
};

const Maps = () => {
  const [mapWidth, setMapWidth] = useState('99%');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Update map style to force a re-render to make sure the geolocation button appears
  const updateMapStyle = () => {
    setMapWidth('100%');
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log('Current Location:-', text);
  
  return (
      <MapView
        style={[styles.map, { width: mapWidth }]}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        followsUserLocation
        zoomControlEnabled
        onMapReady={updateMapStyle}
        region={regionFinland}
      />
  );
};

export default Maps;
