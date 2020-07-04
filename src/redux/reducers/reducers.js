import * as ActionTypes from '../types/types';

const initialState = {
  userDetails: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducers;
