import {combineReducers} from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import wishListReducer from './wishListReducer';
export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  wishList: wishListReducer,
});
