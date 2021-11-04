import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 2,
    elevation: 3,
    borderRadius: 50,
  },
});

const RoundButton = ({ icon, color, handleClick }) => {
  return (
    <Pressable style={styles.button} onPress={handleClick}>
      <MaterialIcons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default RoundButton;
