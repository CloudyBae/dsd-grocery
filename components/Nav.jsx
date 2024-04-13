import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Nav = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.nav, styles.shadowProp]}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Home button was pressed!'
        onPress={() => navigation.navigate('Home')}
      >
        <FontAwesome5 name='home' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Ingredients button was pressed!'
        onPress={() => navigation.navigate('Ingredient')}
      >
        <FontAwesome5 name='apple-alt' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Recipes button was pressed!'
        onPress={() => navigation.navigate('Recipe')}
      >
        <MaterialCommunityIcons name='chef-hat' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Shopping list button was pressed!'
        onPress={() => navigation.navigate('ShoppingList')}
      >
        <FontAwesome5 name='clipboard-list' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel='Search button was pressed!'
        onPress={() => navigation.navigate('Search')}
      >
        <FontAwesome5 name='search' style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    paddingBottom: 16,
  },
  icon: {
    color: 'black',
    fontSize: 24,
    padding: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Nav;
