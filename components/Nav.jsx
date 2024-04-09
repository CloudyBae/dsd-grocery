import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export const Nav = () => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => console.log('Home button pressed')}>
        <FontAwesome5 name='home' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Ingredient button pressed')}
      >
        <FontAwesome5 name='apple-alt' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Shopping bag button pressed')}
      >
        <FontAwesome5 name='shopping-bag' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Account button pressed')}>
        <FontAwesome5 name='user-circle' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Search button pressed')}>
        <FontAwesome5 name='search' style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
  },
  icon: {
    color: 'black',
    fontSize: 24,
    padding: 10,
  },
});

export default Nav;
