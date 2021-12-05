'use strict';
import Constants from 'expo-constants';

 const API_IP = Constants.manifest.hostUri.split(':')[0];

 const API_PORT = 8000;

export const API_URL = `http://${API_IP}:${API_PORT}`;

const AUTH_URL = `${API_URL}/auth/`;

export const customFetch = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error('Error fetching resources from remote');
  }
};

export const authFetch = async (url, fd) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fd),
    redirect: 'follow',
  };

  try {
    const result = await fetch(url, requestOptions);
    const response = await result.json();
    return response;
  } catch (e) {
    console.log('error', e);
  }
};

export const registerUser = async (formData) => {
  try {
    const response = await authFetch(`${AUTH_URL}/register`, formData);
    return response;
  } catch (e) {
    console.log('error while register', e);
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await authFetch(`${AUTH_URL}/login`, formData);
    return response;
  } catch (e) {
    console.log('error while login', e);
  }
};
