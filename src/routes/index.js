import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'redux';
import Products from '../pages/product';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import themes from '../styles/theme';
import WishList from '../components/WishList';
import WishListItems from '../components/WishListItems';
import {Header} from '../components/Header';
const Route = createStackNavigator(
  {
    Products: {screen: Products},
    Checkout: {screen: Checkout},
    Receipt: {screen: Receipt},
    WishList: {screen: WishListItems},
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
// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Product" component={Products} />
//         <Drawer.Screen name="Checkout" component={Checkout} />
//         {/* <Drawer.Screen name="WishList" component={WishListItems} /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;
export default createAppContainer(Route);
