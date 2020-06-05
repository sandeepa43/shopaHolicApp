import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Products from '../pages/product';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import themes from '../styles/theme';
const Route = createStackNavigator(
  {
    Products: {screen: Products},
    Checkout: {screen: Checkout},
    Receipt: {screen: Receipt},
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
      },
      headerTintColor: '#fff',
    },
  },
);
export default createAppContainer(Route);