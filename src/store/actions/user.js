import {
  GET_USER_LOCATION,
  GET_USER_DATA,
  PUT_USER_POINTS,
  GET_ALL_USERS,
} from '../types';
import { customFetch, API_URL } from '../../services/fetch';

export const getUserLocation = (location) => {
  return {
    type: GET_USER_LOCATION,
    payload: location,
  };
};

export const getUserData = (user) => {
  return {
    type: GET_USER_DATA,
    payload: user,
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const results = await customFetch(`${API_URL}/users/`);
  
      console.log('results',results);
      
      await dispatch({ type: GET_ALL_USERS, results });
      return results || [];
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const putUserPoint = (user) => {
  return async (dispatch) => {
    try {
      if (user) {
        const urlencoded = `${encodeURIComponent(
          'points'
        )}=${encodeURIComponent(user.points + 1)}`;

        const requestOptions = {
          method: 'PUT',
          headers: new Headers({
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: urlencoded,
        };

        const upload = await fetch(
          `${API_URL}/users/${user._id}`,
          requestOptions
        );
        const result = await upload.json();
        if (result.points === user.points + 1) {
          console.log('Points successfully updated');
          return await dispatch({
            type: PUT_USER_POINTS,
            payload: user.points + 1,
          });
        }
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
