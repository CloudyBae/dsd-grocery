import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

export default function MainButton(props) {
  const { onPress, title = 'Button' } = props;
  return (
    <Pressable
      onPress={() => console.log('Button Pressed')}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(114, 192, 143)' : 'rgb(82, 177, 117)',
        },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'regular',
    letterSpacing: 0.25,
    color: 'rgb(255, 255, 255)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 364,
    height: 67,
    borderRadius: 19,
  },
});
