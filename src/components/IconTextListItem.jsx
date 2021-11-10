import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
  },
  icon: {
    padding: 10,
  },
  textWrapper: {
    width: '100%',
    padding: 10,
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.normal,
  },
});

const ListItem = ({ icon, title, handleIconPress }) => (
  <View style={styles.container}>
    {icon && (
      <MaterialIcons
        style={styles.icon}
        name={icon}
        size={30}
        color={theme.colors.secondary}
        onPress={handleIconPress}
      />
    )}
    {title && (
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )}
  </View>
);

export default ListItem;
