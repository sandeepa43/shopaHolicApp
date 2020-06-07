import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Products from '../pages/product';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import themes from '../styles/theme';
import CheckWishList from '../pages/CheckWishList';
import {View, Button, Text} from 'react-native';
import * as React from 'react';
import Header from '../components/Header';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// const Route = createStackNavigator(
//   {
//     Products: {screen: Products},
//     Checkout: {screen: Checkout},
//     Receipt: {screen: Receipt},
//     WishList: {screen: CheckWishList},
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: themes.BACKGROUND_COLOR,
//         paddingHorizontal: 10,
//       },
//       headerTintColor: '#fff',
//     },
//   },
// );

// export default createAppContainer(Route);

function HomeScreen({navigation}) {
  return <Products />;
}

function CheckoutScreen({navigation}) {
  return <Checkout />;
}

function CheckWishListScreen({navigation}) {
  return <CheckWishList />;
}

const Drawer = createDrawerNavigator();

export default class extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Header headerText={'ShopaHolic'} />

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cart" component={CheckoutScreen} />
          <Drawer.Screen name="WishList" component={CheckWishListScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
