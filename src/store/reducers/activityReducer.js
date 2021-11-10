import { GET_ACTIVITY_TYPES, GET_ACTIVITIES_WITH_CODE_TYPE } from '../types';

const initialState = {
  activityTypesList: [],
  activitiesList: [],
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITY_TYPES:
      return {
        ...state,
        activityTypesList: action.payload,
      };
    case GET_ACTIVITIES_WITH_CODE_TYPE:
      return {
        ...state,
        activitiesList: action.payload,
      };

    default:
      return state;
  }
};

export default activityReducer;
