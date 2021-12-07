import React, { useState } from 'react';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../store/actions/user';
import LeaderboardListItem from '../components/LeaderboardListItem';

import theme from '../theme';

const images = {
  background: { uri: require('../../assets/outdoor.png') },
  profile: { uri: require('../../assets/favicon.png') },
};

const styles = StyleSheet.create({
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  emailIcon: {
    color: theme.colors.secondary,
    fontSize: 24,
  },
  userEmailRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userEmail: {
    color: theme.colors.white,
    textDecorationLine:'underline',
    fontSize: 18,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
    padding: 5,
  },
  userImage: {
    borderColor: theme.colors.white,
    borderRadius: 85,
    borderWidth: 3,
    height: 120,
    width: 120,
    marginBottom: 15,
  },
  userNameText: {
    color: theme.colors.white,
    fontSize: 22,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  headerTopic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightGrey,
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  leaderboardBtn: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    alignItems: 'center',

    padding: 10,
  },
  headerText: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
  scrollView: {},
});

const UserScreen = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const user = useSelector((state) => state.user);

  const { userData, usersList } = user;

  // Sort users in a descending order, although response is already sorted
  const sortedList =
    usersList.length > 0 &&
    usersList.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));

  const dispatch = useDispatch();

  const handleLeaderBoardClick = () => {
    setShowLeaderboard(!showLeaderboard);
    dispatch(getAllUsers());
  };

  const renderItem = ({ item, index }) => (
    <LeaderboardListItem
      username={item.username}
      points={item.points}
      rank={index + 1}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={20}
        source={images.background.uri}
      >
        <View style={styles.headerColumn}>
          <Image source={images.profile.uri} style={styles.userImage} />

          <Text style={styles.userNameText}>{userData.username}</Text>
          <View style={styles.userEmailRow}>
            <MaterialIcons name="email" style={styles.emailIcon} />
            <Text style={styles.userEmail}>{userData.email}</Text>
          </View>
        </View>
      </ImageBackground>

      <TouchableOpacity
        onPress={handleLeaderBoardClick}
        style={styles.leaderboardBtn}
      >
        <FontAwesome5 name="medal" size={24} color="white" />
        <Text style={styles.headerText}>Leaderboard</Text>
      </TouchableOpacity>

      {showLeaderboard && (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerTopic}>
            <Text style={styles.headerText}>Ranking</Text>
            <Text style={styles.headerText}>Points</Text>
          </View>

          {usersList.length > 0 && (
            <FlatList
              data={sortedList}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          )}
        </SafeAreaView>
      )}
    </View>
  );
};

export default UserScreen;
