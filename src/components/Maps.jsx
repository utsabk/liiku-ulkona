import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

import { CurrentLocationContext } from '../CurrentLocationContext';

import LocationMarker from '../components/LocationMarker';

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

const Maps = ({ activities }) => {
  const [currentLocation] = useContext(CurrentLocationContext);

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
        {currentLocation && <LocationMarker coordinate={currentLocation} />}
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
