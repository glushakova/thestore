import axios from 'axios';

import { ACTIONST_TYPE } from '../const';

const getGoodsStart = () => ({
  type: ACTIONST_TYPE.START_GOODS,
});

const getGoodsSuccess = (goods) => ({
  type: ACTIONST_TYPE.GET_GOODS_SUCCESS,
  payload: goods,
});

const getGoodsFailure = (error) => ({
  type: ACTIONST_TYPE.GET_GOODS_FAILURE,
  payload: error,
});

export const getGoods = () => {
  return async (dispatch) => {
    dispatch(getGoodsStart());
    try {
      const response = await axios.get('http://localhost:8000/products');
      dispatch(getGoodsSuccess(response.data));
    } catch (err) {
      dispatch(getGoodsFailure(err.message));
    }
  };
};

export const sortGoodsIncreasing = (value) => ({
  type: ACTIONST_TYPE.SORT_GOODS_INCRESEASE,
  payload: value,
});

export const sortGoodsDecreasing = (value) => ({
  type: ACTIONST_TYPE.SORT_GOODS_DECREASE,
  payload: value,
});
