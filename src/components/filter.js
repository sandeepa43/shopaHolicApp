import React, {Component} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {filterProducts, sortProducts} from '../action/productAction';
class Filter extends Component {
  render() {
    return (
      <View className="inline-row">
        {console.log(this.props)}
        <View>
          <Text
            style={
              styles.textStyle
            }>{`${this.props.filteredProducts.length} products found.`}</Text>
        </View>
        <View>
          <Text style={styles.filterStyle}>Filter Price </Text>

          <RNPickerSelect
            onValueChange={(event) =>
              this.props.sortProducts(this.props.filteredProducts, event)
            }
            items={[
              {label: 'Highest to Lowest', value: 'highestprice'},
              {label: 'Lowest to Highest', value: 'lowestprice'},
            ]}
          />
        </View>
        <View className="col-md-4">
          <Text style={styles.filterStyle}> Filter Size</Text>
          <RNPickerSelect
            onValueChange={(event) =>
              this.props.filterProducts(this.props.products, event)
            }
            items={[
              {label: 'XS', value: 'XS'},
              {label: 'S', value: 'S'},
              {label: 'M', value: 'M'},
              {label: 'L', value: 'L'},
              {label: 'XL', value: 'XL'},
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ab0c61',
    fontWeight: 'bold',
  },
  filterStyle: {
    color: '#ab0c61',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
});

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  sort: state.products.sort,
  size: state.products.size,
});
export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter);
