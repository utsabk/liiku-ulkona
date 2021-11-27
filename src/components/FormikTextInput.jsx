import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    paddingStart: 20,
    color: '#d73a4a',
  },
  textInput: {
    width: '90%',
    margin: 5,
    height: 40,
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.textInput}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
