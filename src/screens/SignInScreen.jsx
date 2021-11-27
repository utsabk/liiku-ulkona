import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../components/FormikTextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn: {
    width: '90%',
    backgroundColor: '#fb5b5a',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput placeholder="Enter your username" name="username" />
      <FormikTextInput
        placeholder="Enter your password"
        name="password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.signIn}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log('Username:-', username, 'Password:-', password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
