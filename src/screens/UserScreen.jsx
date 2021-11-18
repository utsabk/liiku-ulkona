import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';

import theme from '../theme';

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
});

const UserScreen = () => {
  const points = useSelector((state) => state.user.points);

  return (
    <View style={styles.container}>
      <Progress.Circle
        size={300}
        progress={points / 100 || 0}
        thickness={10}
        showsText
        formatText={() => points}
        borderColor={theme.colors.secondary}
        borderWidth={3}
        color={theme.colors.red}
      />
    </View>
  );
};

export default UserScreen;
