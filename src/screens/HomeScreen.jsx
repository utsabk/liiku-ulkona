import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchButton from '../components/SearchButton';
import MyLocationButton from '../components/MyLocationButton';
import Maps from '../components/Maps';
import { CurrentLocationProvider } from '../CurrentLocationContext';
import customFetch from '../services/fetch';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  },
});

const URL = 'http://10.0.0.60:8000/activity/';

const HomeScreen = ({ navigation }) => {
  const [activities, setActivities] = useState();

  const fetchActivities = async () => {
    const activities = await customFetch(URL);
    setActivities(activities);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <CurrentLocationProvider>
        <Maps activities={activities} />
        <View style={styles.buttonContainer}>
          <MyLocationButton />
          <SearchButton navigation={navigation} />
        </View>
      </CurrentLocationProvider>
    </View>
  );
};

export default HomeScreen;
