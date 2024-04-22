import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  ButtonLarge,
  ButtonText,
} from './Typography';

const CategoryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonReset, styles.buttonOutline, styles.categoryButton]}
      onPress={
        onPress ||
        (() =>
          console.log(
            `${title} - To use this button, ensure that you have set up a callback function (onPress).`
          ))
      }
    >
      <ButtonLarge>
        <ButtonText>{title || 'Button'}</ButtonText>
      </ButtonLarge>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  categoryButton: {
    width: '45%',
    height: 96,
    borderColor: '#52B175',
    backgroundColor: '#F1F9F4',
  },
  buttonReset: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 18,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    padding: 24,
  },
  buttonOutline: {
    borderColor: '#c2c2c2',
  },
  buttonPrimary: {
    backgroundColor: '#52B175',
    borderColor: '#52B175',
  },
  buttonDestructive: {
    backgroundColor: '#D47373',
    borderColor: '#D47373',
  },
});
