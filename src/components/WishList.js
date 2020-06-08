import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../styles/theme';

class WishList extends Component {
  addToWishList = () => {
    this.props.addItemsToWishList(this.props.item);
  };
  render() {
    const {product} = this.props;
    console.log(product, 'wishlistproduct');
    return (
      <View>
        <TouchableOpacity onPress={this.addToWishList} style={styles.addBtn}>
          <Text style={styles.text}>Add to WishList</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ab0c61',
  },

  addBtn: {
    borderRadius: 20,
    margin: 10,
    padding: 8,
    backgroundColor: '#ab0c61',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});
export default WishList;

// import React, {Component} from 'react';
// import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
// import {connect} from 'react-redux';
// export class WishList extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props, 'ww');
//     this.state = {
//       opacity: new Animated.Value(1),
//     };
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.WishListItems !== this.props.WishListItems) {
//       this.startAnimation();
//     }
//   }
//   startAnimation() {
//     Animated.timing(this.state.opacity, {
//       toValue: 0,
//       duration: 500,
//     }).start(() => {
//       setTimeout(() => {
//         this.endAnimation();
//       }, 100);
//     });
//   }
//   endAnimation() {
//     Animated.timing(this.state.opacity, {
//       toValue: 1,
//       duration: 500,
//     }).start();
//   }
//   onPress = () => {
//     // this.props.navigation.navigate('Checkout');
//     console.log('clicked');
//   };
//   render() {
//     const {WishListItems} = this.props;
//     console.log(WishListItems, 'WishListItems');
//     let animatedStyle = {opacity: this.state.opacity};
//     return (
//       <Animated.View style={[styles.container, animatedStyle]}>
//         <TouchableOpacity onPress={this.onPress}>
//           <Text style={styles.wishList}>
//             {/* Your wish list: {WishListItems.length} items wish list */}
//             wishlist
//           </Text>
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cart,
//   WishListItems: state.wishList.cart,
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cart: {
//     color: 'white',
//     fontSize: 14,
//   },
// });
// export default connect(mapStateToProps)(WishList);
