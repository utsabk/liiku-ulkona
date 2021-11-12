import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FavouritesListItem from '../components/FavouritesListItem';
import {
  removeFromFavoritesList,
  setActivity,
} from '../store/actions/activity';

const FavouritesScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { favourites } = useSelector((state) => state.activity);

  const { activityDetails } = useSelector((state) => {
    return {
      activityDetails: state.activity.activityDetails,
    };
  });

  const handleRemovePress = (activity) => {
    dispatch(removeFromFavoritesList(activity));
  };

  const handleItemPress = (activity) => {
    dispatch(setActivity(activity));
    if (activityDetails) {
      navigation.navigate('ActivityDetails');
    }
  };

  const renderItem = ({ item }) => (
    <FavouritesListItem
      subtitle={
        `${item.location.address}, ${
          item.location.postalCode ? item.location.postalCode : ''
        } ${item.location.postalOffice ? item.location.postalOffice : ''}` ||
        'No location provided'
      }
      title={item.name || 'N/A'}
      handleIconPress={() => handleRemovePress(item)}
      handleItemPress={() => handleItemPress(item)}
    />
  );

  return (
    <SafeAreaView>
      {favourites && (
        <FlatList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={(item) => item.sportsPlaceId.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default FavouritesScreen;
