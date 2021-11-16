import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: 10,
  },
});

const UserScreen = () => {
  const points = useSelector((state) => state.user.points);

  return (
    <View style={styles.container}>
      <Progress.Circle
        size={300}
        style={styles.progress}
        progress={points / 100 || 0}
        thickness={10}
        borderColor="blue"
        borderWidth={3}
        strokeCap="round"
        color="red"
      />
    </View>
  );
};

export default UserScreen;
