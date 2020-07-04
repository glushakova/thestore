import axios from 'axios';
import { ACTIONST_TYPE } from '../const';

const getProductStart = () => ({
  type: ACTIONST_TYPE.START_PRODUCT,
});

const getProductSuccess = (product) => ({
  type: ACTIONST_TYPE.GET_PRODUCT_SUCCESS,
  payload: product,
});

const getProductFailure = (error) => ({
  type: ACTIONST_TYPE.GET_PRODUCT_FAILURE,
  payload: error,
});

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(getProductStart());
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      dispatch(getProductSuccess(response.data));
    } catch (err) {
      dispatch(getProductFailure(err.message));
    }
  };
};
