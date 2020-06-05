import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animted} from 'react-native';
import {connect} from 'react-redux';
import WishList from './WishList';
export class WishListItems extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'cartprops');
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.WishListItems !== this.props.WishListItems) {
      this.startAnimation();
    }
  }

  onPress = () => {
    this.props.navigation.navigate('Checkout');
  };
  render() {
    const {WishListItems} = this.props;
    console.log(WishListItems, 'wishlistitems');

    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{fontSize: 14, fontWeight: 'bold', margin: 10}}>
            Your wish list: {WishListItems} items
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  WishListItems: state.wishList.cart,
});

export default connect(mapStateToProps)(WishListItems);
