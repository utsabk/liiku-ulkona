import React from 'react';
import RoundButton from './RoundButton';
import theme from '../theme';

const SearchButton = ({ navigation }) => {
  const handleSearch = () => navigation.navigate('Search');

  return (
    <RoundButton
      icon="search"
      color={theme.colors.secondary}
      handleClick={handleSearch}
    />
  );
};

export default SearchButton;
