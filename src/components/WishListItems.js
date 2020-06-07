import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animted} from 'react-native';
import {connect} from 'react-redux';
export class WishListItems extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'cartprops');
  }

  onPress = () => {
    this.props.navigation.navigate('WishList');
  };
  render() {
    const {WishListItems} = this.props;
    console.log(this.props, 'WishList');

    return (
      <View>
        <Button onPress={() => this.props.navigation.goBack()} title={'go'} />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{fontSize: 14, fontWeight: 'bold', margin: 10}}>
            Your wish list: {WishListItems.length} items
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  WishListItems: state.wishList.wishList,
});

export default connect(mapStateToProps)(WishListItems);
