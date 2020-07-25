export const ROUTES = {
  SEARCH: '/search',
  LASTORDER: '/order-history/:index',
  CART: '/cart',
  GOODS: '/goods',
  PRODUCT: '/goods/:index',
  PROFILE: '/profile',
  HISTORY: '/order-history',
  CHECKOUT: '/checkout',
  CONFIRM: '/order-confirm',
  SIGNIN: '/sign-in',
  REGISTER: '/register',
  MAIN: '/',
};

export const ACTIONST_TYPE = {
  ON_CHANGE_PHONE: 'ON_CHANGE_PHONE',
  ON_CHANGE_ADDRESS: 'ON_CHANGE_ADDRESS',
  ON_CHANGE_COMMENT: 'ON_CHANGE_COMMENT',

  ON_CHANGE_EMAIL: 'ON_CHANGE_EMAIL',
  ON_CHANGE_PASSWORD: 'ON_CHANGE_PASSWORD',
  ON_CHANGE_FIRST_NAME: 'ON_CHANGE_FIRST_NAME',
  ON_CHANGE_LAST_NAME: 'ON_CHANGE_LAST_NAME',

  ON_CHANGE_SEARCH: 'ON_CHANGE_SEARCH',

  CLICK_BUTTON_PLUS: 'CLICK_BUTTON_PLUS',
  CLICK_BUTTON_MINUS: 'CLICK_BUTTON_MINUS',

  START_AUTH: 'START_AUTH',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',

  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',

  AUTO_SIGN_IN: 'AUTO_SIGN_IN',

  SIGN_OUT: 'SIGN_OUT',

  START_GOODS: 'START_GOODS',
  GET_GOODS_SUCCESS: 'GET_GOODS_SUCCESS',
  GET_GOODS_FAILURE: 'GET_GOODS_FAILURE',

  SORT_GOODS: 'SORT_GOODS',

  START_PRODUCT: 'START_PRODUCT',
  GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
  GET_PRODUCT_FAILURE: 'GET_PRODUCT_FAILURE',

  START_ORDER: 'START_ORDER',
  POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS',
  POST_ORDER_FAILURE: 'POST_ORDER_FAILURE',

  GET_ORDERS_SUCCESS: 'GET_ORDERS_SUCCESS',
  GET_ORDERS_FAILURE: 'GET_ORDERS_FAILURE',

  GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS',

  CLEAR: 'CLEAR',
};
