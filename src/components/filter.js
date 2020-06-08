import React, {Component} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {filterProducts, sortProducts} from '../action/productAction';
class Filter extends Component {
  render() {
    return (
      <View className="inline-row">
        {console.log(this.props)}
        <View>
          <Text>{`${this.props.filteredProducts.length} products found.`}</Text>
        </View>
        <View>
          <Text>Filter Price </Text>

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
          <Text> Filter Size</Text>
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
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  sort: state.products.sort,
  size: state.products.size,
});
export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter);
