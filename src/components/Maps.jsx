import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    height: '100%',
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

  // Update map style to force a re-render to make sure the geolocation button appears
  const updateMapStyle = () => {
    setMapWidth('100%');
  };

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
