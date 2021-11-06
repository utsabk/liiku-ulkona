import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import { ActivityTypeProvider } from '../ActivityTypeContext';

const SearchScreen = ({navigation}) => {
  return (
    <ActivityTypeProvider>
      <>
        <SearchBar navigation={navigation} />
        <SearchList navigation={navigation} />
      </>
    </ActivityTypeProvider>
  );
};

export default SearchScreen;
