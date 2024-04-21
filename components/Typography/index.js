import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// Hook for loading fonts
const useCustomFonts = () => {
  const [loaded] = useFonts({
    'Gilroy-Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Regular': require('../../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-Heavy': require('../../assets/fonts/Gilroy-Heavy.ttf'),
    'Gilroy-Light': require('../../assets/fonts/Gilroy-Light.ttf'),
  });

  return loaded;
};

// Title component
export const Title = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.title, style]}>{children}</Text>;
};

// HeaderTitle component
export const HeaderTitle = ({ children, style }) => {
  useCustomFonts();
  return <Text style={[styles.HeaderTitle, style]}>{children}</Text>;
};

// Body component
export const Body = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.body, style]}>{children}</Text>;
};

// BodySmall component
export const BodySmall = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.bodySmall, style]}>{children}</Text>;
};

// Caption component
export const Caption = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.caption, style]}>{children}</Text>;
};

// ButtonLarge component
export const ButtonLarge = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.buttonLarge, style]}>{children}</Text>;
};

// ButtonText component
export const ButtonText = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.buttonText, style]}>{children}</Text>;
};

// ButtonText component
export const ButtonSmall = ({ children, style }) => {
  const loaded = useCustomFonts();

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.buttonSmall, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#030303',
  },
  HeaderTitle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    lineHeight: 18,
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
