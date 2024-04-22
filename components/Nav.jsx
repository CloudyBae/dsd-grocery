import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Caption } from './Typography';

const Nav = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.nav]}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Home button was pressed!'
        onPress={() => navigation.navigate('Home')}
      >
        <FontAwesome5 name='home' style={styles.icon} />
        <Caption>Home</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Ingredients button was pressed!'
        onPress={() => navigation.navigate('Ingredients')}
      >
        <FontAwesome5 name='apple-alt' style={styles.icon} />
        <Caption>Ingredients</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Shopping list button was pressed!'
        onPress={() => navigation.navigate('Shopping List')}
      >
        <FontAwesome5 name='clipboard-list' style={styles.icon} />
        <Caption>Shopping</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Account Settings button was pressed!'
        onPress={() => navigation.navigate('Account')}
      >
        <MaterialCommunityIcons name='account-circle' style={styles.icon} />
        <Caption>Account</Caption>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#c2c2c2',
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
  innerNavContainer: {
    // justifyContent: 'space-around',
    // textAlign: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // padding: 16,
  },
  iconContainer: {
    // alignItems: 'center',
    // gap: 4,
    // borderWidth: 1
  },
  icon: {
    color: '#121212',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default Nav;
