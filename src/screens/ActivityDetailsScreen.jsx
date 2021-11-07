import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ActivityDetailsContext } from '../ActivityDetailsContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    fontSize: 25,
  },
});

const ActivityDetailsScreen = () => {
  const [activityDetails] = useContext(ActivityDetailsContext);

  console.log('actiivityDetails', activityDetails.name);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
    </View>
  );
};

export default ActivityDetailsScreen;
