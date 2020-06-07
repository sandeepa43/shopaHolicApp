import React, {Component} from 'react';
import {connect} from 'react-redux';
import CheckoutItems from '../components/CheckoutItems';
import {View, Button, Text} from 'react-native';

export class CheckWishList extends Component {
  render() {
    const {wishListItems, navigation, cartTotal, wishList} = this.props;
    console.log(this.props, 'ok');
    return <CheckoutItems cartItems={wishListItems} cartTotal={cartTotal} />;
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  wishListItems: state.wishList.wishList,
});
export default connect(mapStateToProps)(CheckWishList);
