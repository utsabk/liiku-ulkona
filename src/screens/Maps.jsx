import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import {
  Platform,
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';



import Constants from 'expo-constants';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import LocationMarker from '../components/LocationMarker';
import RoundButton from '../components/RoundButton';
import theme from '../theme';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
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

const Maps = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [activities, setActivities] = useState();

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

  const fetchActivities = async () => {
    try {
      const response = await fetch('http://10.0.0.60:8000/activity/');
      const json = await response.json();

      setActivities(json);
    } catch (err) {
      throw new Error('Error fetching resources from remote');
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleSearch = () =>navigation.navigate('Search');


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
      <View style={styles.buttonContainer}>
        <RoundButton
          icon="my-location"
          color="grey"
          handleClick={getCurrentPosition}
        />
        <RoundButton icon="search" color={theme.colors.secondary} handleClick={handleSearch} />
      </View>
    </View>
  );
};

export default Maps;
