import React from 'react';
import { Searchbar, Appbar } from 'react-native-paper';
import HeaderAppbar from './HeaderAppbar';

const SearchBar = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

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
