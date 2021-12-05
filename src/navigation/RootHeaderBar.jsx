import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import HeaderAppbar from '../components/HeaderAppbar';
import theme from '../theme';

const styles = StyleSheet.create({
  appBarContent: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});
const saveIcon = () => (
  <Fontisto
    name="favorite"
    size={30}
    style={{ marginStart: 2 }}
    color={theme.colors.red}
  />
);

const userIcon = () => (
  <FontAwesome5 name="user-circle" size={30} color={theme.colors.secondary} />
);

const HeaderBar = ({ navigation }) => {
  
  const { userToken } = useSelector((state) => state.user);

  const handleQRScan = () => navigation.navigate('QRScan');
  const handleFavourite = () => navigation.navigate('Favourites');
  const handleUser = () =>
    userToken ? navigation.navigate('User') : navigation.navigate('SignIn');

  return (
    <HeaderAppbar>
      <Appbar.Content titleStyle={styles.appBarContent} title="Liiku-ulkona" />
      <Appbar.Action
        icon="qrcode-scan"
        color={theme.colors.secondary}
        size={28}
        onPress={handleQRScan}
      />
      <Appbar.Action icon={saveIcon} size={30} onPress={handleFavourite} />
      <Appbar.Action icon={userIcon} size={30} onPress={handleUser} />
    </HeaderAppbar>
  );
};

export default HeaderBar;
