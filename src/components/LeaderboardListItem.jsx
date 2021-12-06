import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',

  },
  rank: {
    fontSize: theme.fontSizes.heading,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
    padding: 12,
  },
  icon: {
    padding: 15,
    borderRadius: 40,
    borderWidth: 2,
    height: 50,
    width: 50,
    borderColor: theme.colors.secondary,
  },
  textWrapper: {
    padding: 10,
  },
  username: {
    fontSize: 24,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
  },
  points: {
    borderRadius: 50,
    height: 40,
    width: 40,
    backgroundColor: theme.colors.lightGrey,
    borderColor: theme.colors.grey,
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: 22,
    color: theme.colors.black,
    textAlign: 'center',
  },
});

const ordinal_suffix_of = (i) => {
  let j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + 'st';
  }
  if (j == 2 && k != 12) {
    return i + 'nd';
  }
  if (j == 3 && k != 13) {
    return i + 'rd';
  }
  return i + 'th';
};

const LeaderboardListItem = ({ rank, username, points }) => (
  <View style={styles.container}>
    <View style={styles.user}>

      {rank && <Text style={styles.rank}>{ordinal_suffix_of(rank)}</Text>}

      <FontAwesome
        style={styles.icon}
        name="user"
        size={28}
        color={theme.colors.secondary}
      />

      {username && (
        <View style={styles.textWrapper}>
          <Text style={styles.username}>{username}</Text>
        </View>
      )}
    </View>

    <View style={styles.points}>
      <Text style={styles.pointsText}>{points}</Text>
    </View>
  </View>
);

export default LeaderboardListItem;
