
import {
  GET_USER_LOCATION,
  GET_USER_DATA,
  PUT_USER_POINTS,
} from '../types';

const initialState = {
  userLocation: undefined,
  userData: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };

    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case PUT_USER_POINTS:
      return {
        ...state,
        userData: {...state.userData , points:action.payload,}
      };

    default:
      return state;
  }
};

export default userReducer;
