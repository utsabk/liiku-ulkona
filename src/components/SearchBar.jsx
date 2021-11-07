import React, { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Appbar } from 'react-native-paper';
import HeaderAppbar from './HeaderAppbar';
import customFetch from '../services/fetch';
import { ActivityTypeContext } from '../ActivityTypeContext';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState();
  const [, setActivityType] = useContext(ActivityTypeContext);

  const navigation = useNavigation();

  const onChangeSearch = async (query) => {
    setSearchQuery(query);
  };

  const fetchActivityType = async (query) => {
    try {
      if (query) {
        const results = await customFetch(
          `http://10.0.0.60:8000/activity/type/?name=${query}`
        );
        setActivityType(results);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchActivityType(searchQuery);
  }, [searchQuery]);

  const handleBackPress = () => navigation.navigate('Home');

  return (
    <HeaderAppbar>
      <Appbar.BackAction onPress={handleBackPress} />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ elevation: 0 }}
      />
    </HeaderAppbar>
  );
};

export default SearchBar;
