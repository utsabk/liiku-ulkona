import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import { ActivityTypeProvider } from '../ActivityTypeContext';

const SearchScreen = () => {
  return (
    <ActivityTypeProvider>
      <>
        <SearchBar  />
        <SearchList  />
      </>
    </ActivityTypeProvider>
  );
};

export default SearchScreen;
