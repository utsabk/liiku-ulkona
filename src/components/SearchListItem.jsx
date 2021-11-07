import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  item: {
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    padding: 12,
    marginHorizontal:8,
    color: theme.colors.secondary,
    fontWeight: theme.fontWeights.bold,
  },
});

const ListItem = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default ListItem;
