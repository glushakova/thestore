import { ACTIONST_TYPE } from '../const';

const initialState = {
  value: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.CLICK_BUTTON_PLUS: {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload]: (state.value[action.payload] || 0) + 1,
        },
      };
    }
    case ACTIONST_TYPE.CLICK_BUTTON_MINUS: {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload]: (state.value[action.payload] || 0) - 1,
        },
      };
    }
    case ACTIONST_TYPE.POST_ORDER_SUCCESS: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
