import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from './Typography';

const CategoryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.categoryButton]}
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
    alignItems: 'center',
    backgroundColor: '#52B175',
    borderRadius: 18,
    justifyContent: 'center',
    width: '45%',
    height: 96,
  },
});
