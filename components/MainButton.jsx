import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { ButtonText } from './Typography';

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
      <ButtonText style={styles.buttonText}>{title}</ButtonText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 67,
    borderRadius: 18,
  },
  buttonText: {
    color: '#121212',
  },
});
