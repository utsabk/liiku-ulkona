import { GET_ACTIVITY_TYPES } from '../types';

const initialState = {
  activityTypesList: [],
};

const activityTypesListReducer = (state = initialState, action) => {
  console.log('reducer action', action);
  console.log('reducer state', state);

  switch (action.type) {
    case GET_ACTIVITY_TYPES:
      return {
        ...state,
        activityTypesList: action.payload,
      };

    default:
      return state;
  }
};

export default activityTypesListReducer;
