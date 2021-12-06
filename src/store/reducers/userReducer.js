import {
  GET_USER_LOCATION,
  GET_USER_DATA,
  PUT_USER_POINTS,
  GET_ALL_USERS,
} from '../types';

const initialState = {
  userLocation: undefined,
  userData: undefined,
  usersList: [],
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
        userData: { ...state.userData, points: action.payload },
      };

    case GET_ALL_USERS:
      return {
        ...state,
        usersList: action.results,
      };

    default:
      return state;
  }
};

export default userReducer;
