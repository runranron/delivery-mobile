import types from '../actions/types';

const initialState = {
  messages: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_MESSAGES:
      return {...state, isLoading: true};
    case types.GET_MESSAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case types.GET_MESSAGES_SUCCESS:
      return {...state, isLoading: false, ...payload};
    default:
      return state;
  }
};
