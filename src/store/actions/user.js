import { GET_USER_LOCATION, GET_USER_POINTS } from '../types';

export const getUserLocation = (location) => {
  return {
    type: GET_USER_LOCATION,
    payload: location,
  };
};

export const getUserPoints = () => {
  return {
    type: GET_USER_POINTS,
  };
};
