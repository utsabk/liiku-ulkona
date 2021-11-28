import { GET_USER_LOCATION, ADD_USER_POINTS, GET_USER_TOKEN } from '../types';

export const getUserLocation = (location) => {
  return {
    type: GET_USER_LOCATION,
    payload: location,
  };
};

export const addUserPoints = () => {
  return {
    type: ADD_USER_POINTS,
  };
};

export const getUserToken = (token) => {
  return {
    type: GET_USER_TOKEN,
    payload: token,
  };
};
