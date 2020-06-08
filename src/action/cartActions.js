import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './types';
import AsyncStorage from 'react-native';
export const addToCart = (item, product) => (dispatch) => {
  console.log(item, 'items');

  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
};
export const emptyCart = () => (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });
};
