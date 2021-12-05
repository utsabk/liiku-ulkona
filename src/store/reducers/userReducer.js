import { GET_USER_LOCATION, ADD_USER_POINTS, GET_USER_DATA} from '../types';

const initialState = {
  userLocation: undefined,
  points: 0,
  userData: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };

    case ADD_USER_POINTS:
      return {
        ...state,
        points: state.points + 1,
      };

    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
