'use strict';
import Constants from 'expo-constants';

export const API_IP = Constants.manifest.hostUri.split(':')[0];

export const API_PORT = 8000;

export const customFetch = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error('Error fetching resources from remote');
  }
};
