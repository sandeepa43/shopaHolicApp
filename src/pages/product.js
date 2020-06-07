import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import Product from '../components/Product';
import {addToCart} from '../action/cartActions';
import {addToWishList} from '../action/wishListActions';
import {fetchProducts} from '../action/productAction';
import Logo from '../components/Logo';
import Cart from '../components/Cart';
import WishList from '../components/WishList';
import WishListItems from '../components/WishListItems';
import {Header} from '../components/Header';
class Products extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Products',
      headerLeft: <WishListItems navigation={navigation} />,
      headerRight: <Cart navigation={navigation} />,
    };
  };
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.fetchProducts();
  };
  addItemsToCart = (product) => {
    this.props.addToCart(product);
  };
  addItemsToWishList = (product) => {
    this.props.addToWishList(product);
  };
  render() {
    const {products, navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            data={products}
            renderItem={({item}) => (
              <View>
                <Product
                  item={item}
                  addItemsToCart={this.addItemsToCart}
                  product={item}
                />
                <WishList
                  item={item}
                  addItemsToWishList={this.addItemsToWishList}
                  product={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#34495e90'}} />
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});
const mapStateToProps = (state) => (
  console.log(state, 'mapstate'),
  {
    products: state.products.items,
  }
);
export default connect(mapStateToProps, {
  addToCart,
  fetchProducts,
  addToWishList,
})(Products);
