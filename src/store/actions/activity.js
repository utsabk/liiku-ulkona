import { GET_ACTIVITY_TYPES, GET_ACTIVITIES_WITH_CODE_TYPE } from '../types';
import customFetch from '../../services/fetch';

export const setActivityList = (action, list) => {
  return {
    type: action,
    payload: list,
  };
};

export const getActivityTypesList = (query) => {
  return async (dispatch) => {
    try {
      if (query) {
        const results = await customFetch(
          `http://10.0.0.60:8000/activity/type/?name=${query}`
        );
        await dispatch(setActivityList(GET_ACTIVITY_TYPES, results));

        return results || [];
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getActivitiesList = (typeCode) => {
  return async (dispatch) => {
    try {
      if (typeCode) {
        const results = await customFetch(
          `http://10.0.0.60:8000/activity/code/?code=${typeCode}`
        );
        if (!results.length) {
          alert('No such activities in this region');
        }
        await dispatch(setActivityList(GET_ACTIVITIES_WITH_CODE_TYPE, results));
        return results || [];
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
