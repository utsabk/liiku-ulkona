import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
  },
  textWrapper: {
    width: '100%',
    padding: 10,    
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
  },
});

const ListHeader = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default ListHeader;
