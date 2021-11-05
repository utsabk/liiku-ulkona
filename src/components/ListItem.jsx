import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    color:theme.colors.white,
  },
});

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default ListItem;
