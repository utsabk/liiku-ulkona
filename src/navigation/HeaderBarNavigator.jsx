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
  const handleQRScan = () => navigation.navigate('QRScan');
  const handleFavourite = () => navigation.navigate('Favourites');
  const handleUser = () => navigation.navigate('User');

  return (
    <HeaderAppbar>
      <Appbar.Content titleStyle={styles.appBarContent} title="Liiku-ulkona" />
      <Appbar.Action
        icon="qrcode-scan"
        color={theme.colors.secondary}
        size={26}
        onPress={handleQRScan}
      />
      <Appbar.Action
        icon="heart"
        color={theme.colors.red}
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
