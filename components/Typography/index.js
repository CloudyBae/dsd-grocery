import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import GilroyBold from '../../assets/fonts/Gilroy-Bold.ttf';
import GilroyRegular from '../../assets/fonts/Gilroy-Regular.ttf';
import GilroyMedium from '../../assets/fonts/Gilroy-Medium.ttf';
import GilroyHeavy from '../../assets/fonts/Gilroy-Heavy.ttf';
import GilroyLight from '../../assets/fonts/Gilroy-Light.ttf';

const customFonts = {
  'Gilroy-Bold': GilroyBold,
  'Gilroy-Regular': GilroyRegular,
  'Gilroy-Medium': GilroyMedium,
  'Gilroy-Heavy': GilroyHeavy,
  'Gilroy-Light': GilroyLight,
};

// Hook for loading fonts
const useCustomFonts = () => {
  useFonts(customFonts);
};

// Title component
export const Title = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.title, style]}>{children}</Text>;
};

// Body component
export const Body = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.body, style]}>{children}</Text>;
};

// BodySmall component
export const BodySmall = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.bodySmall, style]}>{children}</Text>;
};

// Caption component
export const Caption = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.caption, style]}>{children}</Text>;
};

// ButtonLarge component
export const ButtonLarge = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.buttonLarge, style]}>{children}</Text>;
};

// ButtonText component
export const ButtonText = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.buttonText, style]}>{children}</Text>;
};

// ButtonText component
export const ButtonSmall = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.buttonSmall, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#030303',
  },
  body: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 15,
    color: '#7C7C7C',
  },
  bodySmall: {
    fontFamily: 'Gilroy-Light',
    fontSize: 13,
    lineHeight: 21,
    color: '#7C7C7C',
  },
  caption: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 14,
    lineHeight: 15.41,
    color: '#7C7C7C',
  },
  buttonLarge: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    lineHeight: 18,
    color: '#181725',
  },
  buttonText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
    lineHeight: 18,
    color: '#181725',
  },
  buttonSmall: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    lineHeight: 14,
    color: '#181725',
  },
});
