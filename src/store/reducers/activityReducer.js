import {
  GET_ACTIVITY_TYPES,
  GET_ACTIVITIES_WITH_CODE_TYPE,
  GET_ACTIVITY_WITH_ID,
  ADD_TO_FAVUORITES_LIST,
  REMOVE_FROM_FAVUORITES_LIST,
} from '../types';

const initialState = {
  activityTypesList: [],
  activitiesList: [],
  activityDetails: {},
  favourites:[]
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
    case GET_ACTIVITY_WITH_ID:
      return {
        ...state,
        activityDetails: action.payload,
      };

    case ADD_TO_FAVUORITES_LIST:
      return{
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    case REMOVE_FROM_FAVUORITES_LIST:
      return {
        ...state,
        favourites: state.favourites.filter(activity => activity.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default activityReducer;
