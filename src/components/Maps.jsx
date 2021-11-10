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

const Maps = () => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const navigation = useNavigation();

  const [selectedMarker, setSelectedMarker] = useState({});

  const { userLocation } = useSelector((state) => state.location);

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
        mapRef.current.animateCamera(newCamera, { duration: 1000 });
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
      {activities &&
        activities.map((activity) => (
          <CustomMarker
            key={activity._id}
            activity={activity}
            onMarkerPress={() => handelMarkerPress(activity)}
            onCalloutPress={handelCalloutPress}
            coordinate={{
              latitude: activity.location.coordinates.lat,
              longitude: activity.location.coordinates.lon,
            }}
          />
        ))}
    </MapView>
  );
};

export default Maps;
