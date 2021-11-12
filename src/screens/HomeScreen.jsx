import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SearchButton from '../components/SearchButton';
import MyLocationButton from '../components/MyLocationButton';
import Maps from '../components/Maps';
import { setActivities } from '../store/actions/activity';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  },
  button: {
    alignSelf: 'center',
    margin: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    letterSpacing: 0.2,
    color: theme.colors.primary,
  },
});

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { activities } = useSelector((state) => {
    return {
      activities: state.activity.activitiesList,
    };
  });

  const handlePress = () => {
    dispatch(setActivities([]));
  };
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Maps />
      {activities.length > 0 && (
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>Clear search</Text>
        </Pressable>
      )}

      <View style={styles.buttonContainer}>
        <MyLocationButton />
        <SearchButton />
      </View>
    </View>
  );
};

export default HomeScreen;
