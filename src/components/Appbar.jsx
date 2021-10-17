import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import theme from '../theme';

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: theme.colors.white,
  },
  appBarContent: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const MyAppBar = () => {
  const handleQRScan = () => console.log('QR code');
  const handleFavourite = () => console.log('Favourite list');
  const handleUser = () => console.log('Shown more');

  return (
    <Appbar.Header statusBarHeight={0} style={styles.appBarHeader}>
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
    </Appbar.Header>
  );
};

export default MyAppBar;
