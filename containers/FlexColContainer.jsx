import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from '../components/Typography';

const FlexColContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default FlexColContainer;
