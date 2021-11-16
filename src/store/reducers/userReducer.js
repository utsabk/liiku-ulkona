import { GET_USER_LOCATION, GET_USER_POINTS } from '../types';

const initialState = {
  userLocation: {},
  points: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };

    case GET_USER_POINTS:
      return {
        ...state,
        points: state.points + 1,
      };

    default:
      return state;
  }
};

export default userReducer;
