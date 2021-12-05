import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.red,
    alignSelf: 'flex-start',
    paddingStart:'5%'

  },
  textInput: {
    width: '90%',
    margin: 5,
    height: 40,
    padding: 10,
    borderRadius: 2,
    borderBottomWidth: 3,
    backgroundColor:'rgba(232, 232, 232, 0.7)',

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
