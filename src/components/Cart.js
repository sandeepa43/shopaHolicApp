import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animted} from 'react-native';
import {connect} from 'react-redux';
export class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'cartprops');
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.cartItems !== this.props.cartItems) {
    }
  }

  onPress = () => {
    this.props.navigation.navigate('Checkout');
  };
  render() {
    const {cartItems} = this.props;
    console.log(cartItems, 'cartItems');

    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{fontSize: 14, fontWeight: 'bold', margin: 10}}>
            Your cart: {cartItems.length} items
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
});

export default connect(mapStateToProps)(Cart);
