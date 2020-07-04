import { ACTIONST_TYPE } from '../const';

const initialState = {
  product: [],
  loading: false,
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.START_PRODUCT: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    default:
      return state;
  }
};
