import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import Constants from 'expo-constants';
import theme from '../theme';

const MARGIN_TOP = Platform.OS === 'ios' && {
  marginTop: Constants.statusBarHeight,
};

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: theme.colors.white,
  },
});

const HeaderAppbar = (props) => {
  return (
    <Appbar.Header
      statusBarHeight={0}
      style={[styles.appBarHeader, MARGIN_TOP]}
    >
      {props.children}
    </Appbar.Header>
  );
};

export default HeaderAppbar;
