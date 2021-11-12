import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FavouritesListItem from '../components/FavouritesListItem';
import { removeFromFavoritesList } from '../store/actions/activity';

const FavouritesScreen = () => {
  const dispatch = useDispatch();

  const { favourites } = useSelector((state) => state.activity);

  console.log('favourites:', favourites);

  const handleRemovePress = (activity) => {
    dispatch(removeFromFavoritesList(activity));
  };

  const handleItemPress = (activity) => {
    console.log('activity:', activity);
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
          keyExtractor={(item) => item.sportsPlaceId}
        />
      )}
    </SafeAreaView>
  );
};

export default FavouritesScreen;
