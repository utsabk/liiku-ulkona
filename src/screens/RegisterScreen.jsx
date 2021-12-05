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
import { registerUser } from '../services/fetch';

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
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = ({ onSubmit }) => {
  const navigation = useNavigation();

  const handleLoginClick = () => navigation.navigate('SignIn');

  return (
    <ImageBackground
      style={styles.img}
      blurRadius={3}
      source={imageBackground.uri}
    >
      <View style={styles.container}>
        <FormikTextInput placeholder="Username" name="username" />
        <FormikTextInput placeholder="Email" name="email" />
        <FormikTextInput
          placeholder="Password"
          name="password"
          secureTextEntry
        />
        <FormikTextInput
          placeholder="Retype password"
          name="confirmPassword"
          secureTextEntry
        />
        <Pressable onPress={onSubmit} style={styles.signIn}>
          <Text style={styles.btnText}>REGISTER</Text>
        </Pressable>
        <Text style={styles.registerText} onPress={handleLoginClick}>
          Have an account? Signin
        </Text>
      </View>
    </ImageBackground>
  );
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .max(255)
    .required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
  confirmPassword: Yup.string()
    .required('Can not be blank')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const onSubmit = async (values, { resetForm }) => {
    const fd = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    const response = await registerUser(fd);

    console.log('response', response);

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
      {({ handleSubmit }) => <RegisterForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Register;
