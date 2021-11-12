import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

import CalloutContainer from './CalloutContainer';

const CustomMarker = ({
  coordinate,
  coords,
  iconName,
  iconColor,
  onMarkerPress,
  onCalloutPress,
  activity,
}) => {
  return (
    <Marker onPress={onMarkerPress} coordinate={coordinate || coords}>
      <FontAwesome5 name={iconName} size={30} color={iconColor} />
      {activity && (
        <Callout onPress={onCalloutPress}>
          <CalloutContainer activity={activity} />
        </Callout>
      )}
    </Marker>
  );
};

export default CustomMarker;
