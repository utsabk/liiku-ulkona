import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  textWrapper: {
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
    padding: 5,
    marginStart: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '85%',
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
    padding: 5,
  },
  subtitle: {
    padding: 5,
    fontSize: theme.fontSizes.small,
    color: theme.colors.grey,
    fontWeight: theme.fontWeights.normal,
  },
});

const ListItem = ({ subtitle, title, handleIconPress, handleItemPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={handleItemPress} style={styles.textWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
    <MaterialIcons
      name="cancel"
      size={30}
      color={theme.colors.secondary}
      onPress={handleIconPress}
    />
  </View>
);

export default ListItem;
