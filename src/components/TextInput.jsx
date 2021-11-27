import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textvalid: {
    borderColor: 'black',
  },
  textinvalid: {
    borderColor: '#d73a4a',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput
      style={[textInputStyle, error ? styles.textinvalid : styles.textvalid]}
      {...props}
    />
  );
};

export default TextInput;
