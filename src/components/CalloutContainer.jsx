import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#00000000',
  },
  contentWrapper: {
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'flex-start',
    fontWeight: theme.fontWeights.bold,
    padding: 2,
  },
  address: {
    alignSelf: 'flex-start',
  },
});

const CalloutContainer = ({ activity }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.name}>
            {activity.name ? activity.name : 'N/A'}
          </Text>
          <Text style={styles.address}>
            {activity.location.address ? activity.location.address : 'N/A'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CalloutContainer;
