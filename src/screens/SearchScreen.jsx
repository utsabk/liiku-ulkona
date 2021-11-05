import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import { ActivityTypeProvider } from '../AcvityTypeContext';

const SearchScreen = ({navigation}) => {
  return (
    <ActivityTypeProvider>
      <>
        <SearchBar navigation={navigation} />
        <SearchList />
      </>
    </ActivityTypeProvider>
  );
};

export default SearchScreen;
