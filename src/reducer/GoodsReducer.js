import { ACTIONST_TYPE } from '../const';

const initialState = {
  goods: [],
  sortParam: 'price_asc',
  loading: false,
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.START_GOODS: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.GET_GOODS_SUCCESS: {
      return {
        ...state,
        loading: false,
        goods: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_GOODS_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    case ACTIONST_TYPE.SORT_GOODS: {
      return {
        ...state,
        sortParam: action.payload,
      };
    }
    default:
      return state;
  }
};
