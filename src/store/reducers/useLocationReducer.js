import { GET_USER_LOCATION } from '../types';

const activityReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };
    default:
      return state;
  }
};

export default activityReducer;
