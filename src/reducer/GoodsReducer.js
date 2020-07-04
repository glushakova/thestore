import { ACTIONST_TYPE } from '../const';

const initialState = {
  goods: [],
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
    case ACTIONST_TYPE.SORT_GOODS_INCRESEASE: {
      const goodsSort = [...state.goods];
      return {
        ...state,
        goods: goodsSort.sort((a, b) => {
          if (a[action.payload] > b[action.payload]) {
            return 1;
          }
          if (a[action.payload] < b[action.payload]) {
            return -1;
          }
          return 0;
        }),
      };
    }
    case ACTIONST_TYPE.SORT_GOODS_DECREASE: {
      const goodsSort = [...state.goods];
      return {
        ...state,
        goods: goodsSort.sort((a, b) => {
          if (a[action.payload] > b[action.payload]) {
            return -1;
          }
          if (a[action.payload] < b[action.payload]) {
            return 1;
          }
          return 0;
        }),
      };
    }
    default:
      return state;
  }
};
