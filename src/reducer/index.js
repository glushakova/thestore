import { combineReducers } from 'redux';

import cardReducer from './CardReducer';
import goodsReducer from './GoodsReducer';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';
import productReducer from './ProductReducer';
import searchReducer from './SearchReducer';

export default combineReducers({
  auth: authReducer,
  card: cardReducer,
  order: orderReducer,
  goods: goodsReducer,
  product: productReducer,
  search: searchReducer,
});
