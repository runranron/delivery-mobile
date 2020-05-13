import types from '../actions/types';

const initialState = {
  orders: [],
  vendor: '',
  status: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case type.LOG_IN_SUCCESS:
      return {...state, status: payload.profile.status};
    case types.GET_ROUTE:
    case types.TOGGLE_STATUS:
      return {...state, isLoading: true};
    case types.GET_ROUTE_FAIL:
    case types.TOGGLE_STATUS_FAIL:
      return {...state, isLoading: false, error: payload.error};
    case types.GET_ROUTE_SUCCESS:
    case types.TOGGLE_STATUS_SUCCESS:
      return {...state, isLoading: true, ...payload};
    default:
      return state;
  }
};
