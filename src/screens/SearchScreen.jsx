import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    fontSize: 25,
  },
});

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SearchScreen!</Text>
    </View>
  );
};

export default UserScreen;