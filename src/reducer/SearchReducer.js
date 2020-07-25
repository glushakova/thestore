import { ACTIONST_TYPE } from '../const';

const initialState = {
  value: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.ON_CHANGE_SEARCH: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};
