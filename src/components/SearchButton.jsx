import React from 'react';
import { useNavigation } from '@react-navigation/native';
import RoundButton from './RoundButton';
import theme from '../theme';

const SearchButton = () => {
  
  const navigation = useNavigation();

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
