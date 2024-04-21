import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from '../components/Typography';

const FlexContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default FlexContainer;
