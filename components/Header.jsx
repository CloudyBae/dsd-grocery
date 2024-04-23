import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Title } from './Typography';

// Uses the pageTitle prop so it can be changed dynamically per page where called.
const Header = ({ pageTitle }) => {
  return (
    <View style={styles.header}>
      <Title>{pageTitle}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
  },
});

export default Header;
