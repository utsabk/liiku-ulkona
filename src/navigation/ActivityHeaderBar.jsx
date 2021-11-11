import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import HeaderAppbar from '../components/HeaderAppbar';
import theme from '../theme';

const styles = StyleSheet.create({
  appBarContent: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const HeaderBar = ({ navigation }) => {
  const handleFavourite = () => console.log('Heart pressed');
  const handleUser = () => navigation.navigate('User');
  const handleBackPress = () => navigation.navigate('Home');

  return (
    <HeaderAppbar>
      <Appbar.BackAction onPress={handleBackPress} />
      <Appbar.Content titleStyle={styles.appBarContent} title="Details" />
      <Appbar.Action
        icon="heart-outline"
        color={theme.colors.grey}
        size={30}
        onPress={handleFavourite}
      />
      <Appbar.Action
        icon="account-circle-outline"
        size={30}
        color={theme.colors.secondary}
        onPress={handleUser}
      />
    </HeaderAppbar>
  );
};

export default HeaderBar;
