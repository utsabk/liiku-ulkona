import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Appbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import HeaderAppbar from './HeaderAppbar';
import { getActivityTypesList } from '../store/actions/activity';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onChangeSearch = async (query) => {
    setSearchQuery(query);
  };

  const fetchActivityType = (query) => {
    if (query) {
      dispatch(getActivityTypesList(query));
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
