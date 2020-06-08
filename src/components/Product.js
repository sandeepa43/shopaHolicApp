import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../styles/theme';
import {connect} from 'react-redux';
import {addToWishList} from '../action/wishListActions';
import WishList from '../components/WishList';
class Product extends Component {
  addToCart = () => {
    this.props.addItemsToCart(this.props.item);
  };
  addItemsToWishList = (product) => {
    this.props.addToWishList(product);
  };
  render() {
    const {product} = this.props;
    return (
      <View style={styles.container}>
        <Image source={product.picture} style={{width: 150, height: 150}} />
        <View style={styles.productDes}>
          <Text>{product.title}</Text>
          <Text>${product.price.toFixed(2)}</Text>
          <Text>{product.author}</Text>
          <View style={styles.viewStyle}>
            <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
              <Text style={styles.text}>Add to cart</Text>
            </TouchableOpacity>
            <WishList
              item={product}
              addItemsToWishList={this.addItemsToWishList}
              product={product}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: themes.BACKGROUND_COLOR,
  },
  productDes: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addBtn: {
    borderRadius: 20,
    margin: 10,
    padding: 8,
    backgroundColor: themes.BUTTON_COLOR,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default connect(null, {addToWishList})(Product);
