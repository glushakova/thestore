import { ACTIONST_TYPE } from '../const';

const initialState = {
  address: '',
  phone: '',
  comments: '',
  products: null,
  lastOrders: null,
  oneLastOrder: null,
  loading: false,
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.ON_CHANGE_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_PHONE: {
      return {
        ...state,
        phone: action.payload,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_COMMENT: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case ACTIONST_TYPE.START_ORDER: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.POST_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    }
    case ACTIONST_TYPE.POST_ORDER_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        lastOrders: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_ORDERS_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        oneLastOrder: action.payload,
      };
    }
    case ACTIONST_TYPE.SIGN_OUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
