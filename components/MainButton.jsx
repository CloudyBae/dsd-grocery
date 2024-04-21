import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

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
    color: 'rgb(255, 255, 255)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 364,
    height: 67,
    borderRadius: 18,
  },
});
