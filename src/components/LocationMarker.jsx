import React, { useEffect, useRef, useState } from 'react';
import { Platform, Dimensions } from 'react-native';
import { AnimatedRegion, MarkerAnimated } from 'react-native-maps';
import LocationDot from './LocationDot';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const LocationMarker = ({ coordinate }) => {

  console.log('Coordinate:-', coordinate);
  
  const duration = 1000;
  const marker = useRef();
  const [coords] = useState(
    new AnimatedRegion({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    })
  );

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (marker.current) {
        marker.current.animateMarkerToCoordinate(
          {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          duration
        );
      }
    } else {
      coords
        .timing({
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          duration,
          useNativeDriver: false,
        })
        .start();
    }
  }, [marker, coordinate, coords]);

  return (
    <MarkerAnimated ref={marker} coordinate={coords}>
      <LocationDot />
    </MarkerAnimated>
  );
};

export default LocationMarker;
