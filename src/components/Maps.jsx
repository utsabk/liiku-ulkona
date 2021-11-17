import React, { useState, useRef, useEffect } from 'react';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityWithId } from '../store/actions/activity';

import CustomMarker from './CustomMarker';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialLocation = {
  latitude: 60.2205088,
  longitude: 24.9379047,
};

const images = {
  pin: {
    imgName: 'pin',
    uri: require('../../assets/pin.png'),
  },
  heart_pin: {
    imgName: 'heart_pin',
    uri: require('../../assets/heart_pin.png'),
  },
};

const Maps = () => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const navigation = useNavigation();

  const [selectedMarker, setSelectedMarker] = useState({});

  const { userLocation } = useSelector((state) => state.user);

  console.log('userLocation', userLocation);

  const { activities } = useSelector((state) => {
    return {
      activities: state.activity.activitiesList,
    };
  });
  const { activityDetails } = useSelector((state) => {
    return {
      activityDetails: state.activity.activityDetails,
    };
  });

  const { favourites } = useSelector((state) => state.activity);

  // Animate to user location when user location updates
  useEffect(() => {
    if (mapRef.current) {
      if (userLocation) {
        const newCamera = {
          center: userLocation,
          zoom: 18,
          heading: 0,
          pitch: 0,
          altitude: 5,
        };
        mapRef.current.animateCamera(newCamera, { duration: 2000 });
      }
    }
  }, [userLocation]);

  const fetchActivityWithId = (Id) => {
    if (Id) {
      dispatch(getActivityWithId(Id));
    }
  };

  useEffect(() => {
    fetchActivityWithId(selectedMarker.sportsPlaceId);
  }, [selectedMarker]);

  // Animate to initialRegion when activities are populated on Maps
  useEffect(() => {
    const newCamera = {
      center: initialLocation,
      heading: 0,
      pitch: 0,
      // Only when using Google Maps.
      zoom: 10,
      // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
      altitude: 50000,
    };
    mapRef.current.animateCamera(newCamera, { duration: 1800 });
  }, [activities]);

  const handelMarkerPress = (activity) => {
    setSelectedMarker(activity);
  };

  const handelCalloutPress = () => {
    if (activityDetails) {
      navigation.navigate('ActivityDetails');
    }
  };

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
      {userLocation && (
        <Marker coordinate={userLocation}>
          <Ionicons name="ios-location" size={36} color="blue" />
        </Marker>
      )}
      {activities.length
        ? activities.map((activity) => (
            <CustomMarker
              key={activity._id}
              iconName={images.pin.uri}
              iconColor="red"
              activity={activity}
              onMarkerPress={() => handelMarkerPress(activity)}
              onCalloutPress={handelCalloutPress}
              coordinate={{
                latitude: activity.location.coordinates.lat,
                longitude: activity.location.coordinates.lon,
              }}
            />
          ))
        : favourites &&
          favourites.map((activity) => (
            <CustomMarker
              key={activity.sportsPlaceId.toString()}
              iconName={images.heart_pin.uri}
              iconColor="#FC46AA"
              activity={activity}
              onMarkerPress={() => handelMarkerPress(activity)}
              onCalloutPress={handelCalloutPress}
              coords={{
                latitude: activity.location.coordinates.wgs84.lat,
                longitude: activity.location.coordinates.wgs84.lon,
              }}
            />
          ))}
    </MapView>
  );
};

export default Maps;
