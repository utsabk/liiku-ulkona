import React, { useEffect, useContext } from 'react';
import { Searchbar, Appbar } from 'react-native-paper';
import HeaderAppbar from './HeaderAppbar';
import customFetch from '../services/fetch';
import { ActivityTypeContext } from '../AcvityTypeContext';

const SearchBar = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState();
  const [, setActivityType] = useContext(ActivityTypeContext);

  const onChangeSearch = async (query) => {
    setSearchQuery(query);
  };

  const fetchActivityType = async (query) => {
    if (query) {
      const results = await customFetch(
        `http://10.0.0.60:8000/activity/search/?name=${query}`
      );
      setActivityType(results);
    }
  };

  useEffect(() => {
    fetchActivityType(searchQuery);
  },[searchQuery]);

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
