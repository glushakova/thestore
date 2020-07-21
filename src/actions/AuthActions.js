import { ACTIONST_TYPE } from '../const';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token'
)}`;

export const onChangeEmail = (emailValue) => ({
  type: ACTIONST_TYPE.ON_CHANGE_EMAIL,
  payload: emailValue,
});

export const onChangePassword = (passwordValue) => ({
  type: ACTIONST_TYPE.ON_CHANGE_PASSWORD,
  payload: passwordValue,
});

const start = () => ({
  type: ACTIONST_TYPE.START_AUTH,
});

const signInSuccess = (user) => ({
  type: ACTIONST_TYPE.SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (err) => ({
  type: ACTIONST_TYPE.SIGN_IN_FAILURE,
  payload: err,
});

export const signIn = ({ email, password, history }) => {
  return async (dispatch) => {
    dispatch(start());
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/sign-in`,
        {
          email,
          password,
        }
      );
      dispatch(signInSuccess(response.data));
      history.push('/');
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };
};

export const autoSignIn = (user) => ({
  type: ACTIONST_TYPE.AUTO_SIGN_IN,
  payload: user,
});

export const onChangeFirstName = (firstName) => ({
  type: ACTIONST_TYPE.ON_CHANGE_FIRST_NAME,
  payload: firstName,
});

export const onChangeLastName = (lastName) => ({
  type: ACTIONST_TYPE.ON_CHANGE_LAST_NAME,
  payload: lastName,
});

const signUpSuccess = (user) => ({
  type: ACTIONST_TYPE.SIGN_UP_SUCCESS,
  payload: user,
});

const signUpFailure = (err) => ({
  type: ACTIONST_TYPE.SIGN_UP_FAILURE,
  payload: err,
});

export const registration = ({
  firstName,
  lastName,
  email,
  password,
  history,
}) => {
  return async (dispatch) => {
    dispatch(start());
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/sign-up`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      dispatch(signUpSuccess(response.data));
      history.push('/');
    } catch (err) {
      dispatch(signUpFailure(err.message));
    }
  };
};

export const signOut = () => ({
  type: ACTIONST_TYPE.SIGN_OUT,
});

export const clear = () => ({
  type: ACTIONST_TYPE.CLEAR,
});
