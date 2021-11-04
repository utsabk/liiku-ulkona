import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchButton from '../components/SearchButton';
import MyLocationButton from '../components/MyLocationButton';
import Maps from '../components/Maps';
import { CurrentLocationProvider } from '../CurrentLocationContext';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  },
});

const HomeScreen = ({ navigation }) => {
  const [activities, setActivities] = useState();

  const fetchActivities = async () => {
    try {
      const response = await fetch('http://10.0.0.60:8000/activity/');
      const json = await response.json();

      setActivities(json);
    } catch (err) {
      throw new Error('Error fetching resources from remote');
    }
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
