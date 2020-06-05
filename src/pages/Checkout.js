import React, {Component} from 'react';
import {connect} from 'react-redux';
import CheckoutItems from '../components/CheckoutItems';
import Logo from '../components/Logo';
import Cart from '../components/Cart';
export class Checkout extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Checkout',
      headerLeft: <Logo navigation={navigation} />,
      headerRight: <Cart navigation={navigation} />,
    };
  };
  render() {
    const {cartItems, navigation, cartTotal} = this.props;
    return (
      <CheckoutItems
        cartItems={cartItems}
        cartTotal={cartTotal}
        navigation={navigation}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
});
export default connect(mapStateToProps)(Checkout);
