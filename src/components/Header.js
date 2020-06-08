import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
const Header = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  backgroundStyle: {
    marginTop: 20,
    paddingTop: 15,
    height: 60,
    backgroundColor: '#ab0c61',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
});

export default Header;
