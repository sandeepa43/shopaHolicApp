import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './types';
export const addToWishList = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: item,
  });
};
export const removeItemFromWishList = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: item,
  });
};
