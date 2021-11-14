import React from 'react';
import { Image } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

import CalloutContainer from './CalloutContainer';

const CustomMarker = ({
  coordinate,
  coords,
  iconName,
  onMarkerPress,
  onCalloutPress,
  activity,
}) => {
  return (
    <Marker onPress={onMarkerPress} coordinate={coordinate || coords}>
      <Image style={{ width: 35, height: 35 }} source={iconName} />
      {activity && (
        <Callout onPress={onCalloutPress}>
          <CalloutContainer activity={activity} />
        </Callout>
      )}
    </Marker>
  );
};

export default CustomMarker;
