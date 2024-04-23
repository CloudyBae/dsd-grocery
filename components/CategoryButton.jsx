import { StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonText } from './Typography';

const CategoryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[stlyes.categoryButton]}
      onPress={
        onPress ||
        (() =>
          console.log(
            `${title} - To use this button, ensure that you have set up a callback function (onPress).`
          ))
      }
    >
      <ButtonText>{title || 'Button'}</ButtonText>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const stlyes = StyleSheet.create({
  categoryButton: {
    alignItems: 'center',
    backgroundColor: '#F7FCF8',
    borderColor: '#52B175',
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
    paddingVertical: 40,
  },
});
