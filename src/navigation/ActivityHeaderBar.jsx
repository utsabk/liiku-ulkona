import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToFavoritesList,
  removeFromFavoritesList,
} from '../store/actions/activity';

import HeaderAppbar from '../components/HeaderAppbar';
import theme from '../theme';

const styles = StyleSheet.create({
  appBarContent: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const HeaderBar = ({ navigation }) => {
  const dispatch = useDispatch();

  const { activityDetails } = useSelector((state) => {
    return {
      activityDetails: state.activity.activityDetails,
    };
  });

  const { favourites } = useSelector((state) => state.activity);

  console.log('favourites:', favourites);

  const addFavorites = (activity) => dispatch(addToFavoritesList(activity));

  const removeFavorites = (activity) =>
    dispatch(removeFromFavoritesList(activity));

  const handleAddToFavorites = (activity) => {
    addFavorites(activity);
  };

  const handleRemoveFromFavorites = (activity) => {
    removeFavorites(activity);
  };

  const ifExists = (activity) => {
    if (
      favourites.filter((item) => item.sportsPlaceId === activity.sportsPlaceId)
        .length > 0
    ) {
      return true;
    }
    return false;
  };

  const handleUser = () => navigation.navigate('User');
  const handleBackPress = () => navigation.navigate('Home');

  return (
    <HeaderAppbar>
      <Appbar.BackAction onPress={handleBackPress} />
      <Appbar.Content titleStyle={styles.appBarContent} title="Details" />
      <Appbar.Action
        icon={ifExists(activityDetails) ? 'heart' : 'heart-outline'}
        color={ifExists(activityDetails) ? theme.colors.red : theme.colors.grey}
        size={30}
        onPress={() =>
          ifExists(activityDetails)
            ? handleRemoveFromFavorites(activityDetails)
            : handleAddToFavorites(activityDetails)
        }
      />
      <Appbar.Action
        icon="account-circle-outline"
        size={30}
        color={theme.colors.secondary}
        onPress={handleUser}
      />
    </HeaderAppbar>
  );
};

export default HeaderBar;
