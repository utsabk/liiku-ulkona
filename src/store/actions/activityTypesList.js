import { GET_ACTIVITY_TYPES } from '../types';
import customFetch from '../../services/fetch';

export const setActivityTypesList = (activityTypesList) => {
    console.log('setActivityTypesList', activityTypesList);
  return {
    type: GET_ACTIVITY_TYPES,
    payload: activityTypesList,
  };
};

export const getActivityTypesList = (query) => {
  return async (dispatch) => {
    try {
      if (query) {
        const results = await customFetch(
          `http://10.0.0.60:8000/activity/type/?name=${query}`
        );
        await dispatch(setActivityTypesList(results));

        return results || [];
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
