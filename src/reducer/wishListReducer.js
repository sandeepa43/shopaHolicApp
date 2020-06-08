import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../action/types';
const initialState = {
  wishList: [],
  total: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [action.payload, ...state.wishList],
        total: state.total + action.payload.price,
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item, i) => i !== action.payload.index,
        ),
        total: state.total - action.payload.item.price,
      };
    default:
      return state;
  }
}
