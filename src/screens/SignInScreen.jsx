import React from 'react';
import * as Yup from 'yup';
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getUserData } from '../store/actions/user';
import FormikTextInput from '../components/FormikTextInput';
import { loginUser } from '../services/fetch';
import theme from '../theme';

const imageBackground = { uri: require('../../assets/outdoor.png') };

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    width: '90%',
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
  registerText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    padding: 25,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const navigation = useNavigation();

  const handleRegisterClick = () => navigation.navigate('Register');

  return (
    <ImageBackground
      style={styles.img}
      blurRadius={3}
      source={imageBackground.uri}
    >
      <View style={styles.container}>
        <FormikTextInput placeholder="Enter your email" name="email" />
        <FormikTextInput
          placeholder="Enter your password"
          name="password"
          secureTextEntry
        />
        <Pressable onPress={onSubmit} style={styles.signIn}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </Pressable>
        <Text style={styles.registerText} onPress={handleRegisterClick}>
          Register for free
        </Text>
      </View>
    </ImageBackground>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});
const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();

  const onSubmit = async (values, { resetForm }) => {
    const fd = {
      email: values.email,
      password: values.password,
    };

    const response = await loginUser(fd);

    if (response.token) {
      dispatch(getUserData(response));
      resetForm({ values: '' });
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
      return navigation.navigate('User');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
