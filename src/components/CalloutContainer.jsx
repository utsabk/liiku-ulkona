import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
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

const CalloutContainer = ({ activity }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.name}>{activity.name}</Text>
          <Text style={styles.address}>{activity.location.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CalloutContainer;
