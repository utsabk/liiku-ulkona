import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

import CalloutContainer from './CalloutContainer';

const CustomMarker = ({
  coordinate,
  onMarkerPress,
  onCalloutPress,
  activity,
}) => {
  return (
    <Marker onPress={onMarkerPress} coordinate={coordinate}>
      <FontAwesome5 name="map-pin" size={30} color="red" />
      {activity && (
        <Callout onPress={onCalloutPress}>
          <CalloutContainer activity={activity} />
        </Callout>
      )}
    </Marker>
  );
};

export default CustomMarker;
