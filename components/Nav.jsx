import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FaHome, FaAppleAlt, FaSearch, FaShoppingBag } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Nav = () => {
  return (
    <View style={styles.nav}>
        <FaHome style={styles.icon} />
        <FaAppleAlt style={styles.icon} />
        <FaShoppingBag style={styles.icon} />
        <MdAccountCircle style={styles.icon} />
        <FaSearch style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    height: 60,
    paddingTop: 10,
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
});

export default Nav;
