import React, { useContext, useRef, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

import { CurrentLocationContext } from '../CurrentLocationContext';
import { ActivitiesContext } from '../ActivitiesContext';

import LocationDot from '../components/LocationDot';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'red',
  },
  pinText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
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
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          ...initialLocation,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {currentLocation && (
          <Marker coordinate={currentLocation}>
            <LocationDot />
          </Marker>
        )}
        {activities &&
          activities.map((activity, i) => (
            <MapView.Marker
              key={i}
              coordinate={{
                latitude: activity.coordinates.lat,
                longitude: activity.coordinates.lon,
              }}
            >
              <View style={styles.circle}>
                <Text style={styles.pinText}>1</Text>
              </View>
            </MapView.Marker>
          ))}
      </MapView>
    </View>
  );
};

export default Maps;
