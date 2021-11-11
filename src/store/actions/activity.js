import {
  GET_ACTIVITY_TYPES,
  GET_ACTIVITIES_WITH_CODE_TYPE,
  GET_ACTIVITY_WITH_ID,
} from '../types';
import { customFetch, API_IP, API_PORT } from '../../services/fetch';

const API_URL = `http://${API_IP}:${API_PORT}/activity/`;

export const setResponse = (action, result) => {
  return {
    type: action,
    payload: result,
  };
};

export const getActivityTypesList = (query) => {
  return async (dispatch) => {
    try {
      if (query) {
        const results = await customFetch(`${API_URL}type/?name=${query}`);
        await dispatch(setResponse(GET_ACTIVITY_TYPES, results));

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
        const results = await customFetch(`${API_URL}code/?code=${typeCode}`);
        if (!results.length) {
          alert('No such activities in this region');
        }
        await dispatch(setResponse(GET_ACTIVITIES_WITH_CODE_TYPE, results));
        return results || [];
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getActivityWithId = (Id) => {
  return async (dispatch) => {
    try {
      if (Id) {
        const result = await customFetch(
          `http://lipas.cc.jyu.fi/api/sports-places/${Id}?lang=en`
        );
        await dispatch(setResponse(GET_ACTIVITY_WITH_ID, result));
        return result || {};
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
