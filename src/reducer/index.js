import { combineReducers } from 'redux';

import cardReducer from './CardReducer';
import goodsReducer from './GoodsReducer';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';
import productReducer from './ProductReducer';
import searchReducer from './SearchReducer';

import storage from 'redux-persist/lib/storage';
import { ACTIONST_TYPE } from '../const';

// export default combineReducers({
//   auth: authReducer,
//   card: cardReducer,
//   order: orderReducer,
//   goods: goodsReducer,
//   product: productReducer,
//   search: searchReducer,
// });

const appReducer = combineReducers({
  auth: authReducer,
  card: cardReducer,
  order: orderReducer,
  goods: goodsReducer,
  product: productReducer,
  search: searchReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === ACTIONST_TYPE.SIGN_OUT) {
    console.log('eeeee');
    storage.removeItem('persist:root');
    localStorage.removeItem('token');
    state = undefined;
  }
  return appReducer(state, action);
};
