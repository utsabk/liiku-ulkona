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
    marginHorizontal: 8,
  },
  subtitle: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.grey,
    fontWeight: theme.fontWeights.normal,
  },
  title: {
    padding: 5,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.normal,
  },
});

const ListItem = ({ subtitle, title }) => (
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default ListItem;
