import React, { useContext, useRef, useEffect } from 'react';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import { Dimensions, StyleSheet } from 'react-native';

import { CurrentLocationContext } from '../CurrentLocationContext';
import { ActivitiesContext } from '../ActivitiesContext';

import { Ionicons } from '@expo/vector-icons'; 

import CustomMarker from './CustomMarker';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialLocation = {
  latitude: 60.2205088,
  longitude: 24.9379047,
};

const Maps = () => {
  const [currentLocation] = useContext(CurrentLocationContext);

  const [activities] = useContext(ActivitiesContext);

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      if (currentLocation) {
        const newCamera = {
          center: currentLocation,
          zoom: 18,
          heading: 0,
          pitch: 0,
          altitude: 5,
        };
        mapRef.current.animateCamera(newCamera, { duration: 1000 });
      }
    }
  }, [currentLocation]);

  return (
    <MapView
      ref={mapRef}
      style={StyleSheet.absoluteFillObject}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
      {currentLocation && (
        <Marker coordinate={currentLocation}>
        <Ionicons name="ios-location" size={36} color="blue" />
        </Marker>
      )}
      {activities &&
        activities.map((activity, i) => (
          <CustomMarker
            key={i}
            coordinate={{
              latitude: activity.coordinates.lat,
              longitude: activity.coordinates.lon,
            }}
          />
        ))}
    </MapView>
  );
};

export default Maps;
