import { GET_USER_LOCATION } from '../types';

export const getUserLocation = (location) => {
  return {
    type: GET_USER_LOCATION,
    payload: location,
  };
};
