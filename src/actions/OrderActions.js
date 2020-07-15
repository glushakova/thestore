import axios from 'axios';
import { ACTIONST_TYPE } from '../const';

const authorization = () =>
  (axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`);
authorization();

export const onChangeAddress = (address) => ({
  type: ACTIONST_TYPE.ON_CHANGE_ADDRESS,
  payload: address,
});

export const onChangePhone = (phoneNumber) => ({
  type: ACTIONST_TYPE.ON_CHANGE_PHONE,
  payload: phoneNumber,
});

export const onChangeComment = (comment) => ({
  type: ACTIONST_TYPE.ON_CHANGE_COMMENT,
  payload: comment,
});

const start = () => ({
  type: ACTIONST_TYPE.START_ORDER,
});

const postOrderSuccess = (product) => ({
  type: ACTIONST_TYPE.POST_ORDER_SUCCESS,
  payload: product,
});

const postOrderFailure = (error) => ({
  type: ACTIONST_TYPE.POST_ORDER_FAILURE,
  payload: error,
});

export const postOrder = (props) => {
  return async (dispatch) => {
    dispatch(start());
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/orders`,
        props
      );
      dispatch(postOrderSuccess(response.data));
    } catch (err) {
      dispatch(postOrderFailure(err.message));
    }
  };
};

const getOrdersSuccess = (product) => ({
  type: ACTIONST_TYPE.GET_ORDERS_SUCCESS,
  payload: product,
});

const getOrdersFailure = (error) => ({
  type: ACTIONST_TYPE.GET_ORDERS_FAILURE,
  payload: error,
});

export const getOrder = () => {
  return async (dispatch) => {
    dispatch(start());
    try {
      authorization();
      const response = await axios.get(`${process.env.REACT_APP_API}/orders`);
      dispatch(getOrdersSuccess(response.data));
    } catch (err) {
      dispatch(getOrdersFailure(err.message));
    }
  };
};

const getOrderSuccess = (product) => ({
  type: ACTIONST_TYPE.GET_ORDER_SUCCESS,
  payload: product,
});

export const getOneOrder = (id) => {
  return async (dispatch) => {
    dispatch(start());
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/orders/${id}`
      );
      dispatch(getOrderSuccess(response.data));
    } catch (err) {
      dispatch(getOrdersFailure(err.message));
    }
  };
};
