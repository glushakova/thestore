import { ACTIONST_TYPE } from '../const';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  user: null,
  token: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.ON_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_LAST_NAME: {
      return {
        ...state,
        lastName: action.payload,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_FIRST_NAME: {
      return {
        ...state,
        firstName: action.payload,
      };
    }
    case ACTIONST_TYPE.START_AUTH: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_SUCCESS: {
      localStorage.setItem('token', action.payload.accessToken);
      return {
        ...state,
        ...initialState,
        user: action.payload.user,
        token: action.payload.accessToken,
        loading: false,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case ACTIONST_TYPE.AUTO_SIGN_IN: {
      return {
        ...state,
        ...initialState,
        user: action.payload.decoded,
      };
    }
    case ACTIONST_TYPE.SIGN_UP_SUCCESS: {
      localStorage.setItem('token', action.payload.accessToken);
      return {
        ...state,
        ...initialState,
        user: action.payload.user,
        token: action.payload.accessToken,
        loading: false,
      };
    }
    case ACTIONST_TYPE.SIGN_UP_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case ACTIONST_TYPE.SIGN_OUT: {
      localStorage.removeItem('token');
      return {
        ...initialState,
      };
    }
    case ACTIONST_TYPE.CLEAR: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
