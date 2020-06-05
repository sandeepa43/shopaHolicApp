import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
const logoImage = require('../assets/images/logo.jpg');
class Logo extends Component {
  goHome = () => {
    this.props.navigation.navigate('Products');
  };
  render() {
    return (
      <TouchableOpacity onPress={this.goHome}>
        <Image
          source={logoImage}
          style={{
            width: 20,
            height: 30,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
    );
  }
}
export default Logo;
