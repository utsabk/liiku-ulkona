import React from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
  contentWrapper: {
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'flex-start',
    fontWeight: theme.fontWeights.bold,
    padding: 5,
  },
  address: {
    alignSelf: 'flex-start',
    padding: 5,
  },
});

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
          <TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.contentWrapper}>
                <Text style={styles.name}>{activity.name}</Text>
                <Text style={styles.address}>{activity.location.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Callout>
      )}
    </Marker>
  );
};

export default CustomMarker;
