import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    padding: 10,
    color: theme.colors.white,
  },
});

const ListItem = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default ListItem;
