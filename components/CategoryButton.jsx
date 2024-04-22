import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonLarge } from './Typography';

const CategoryButton = ({
  title,
  onPress,
  customButtonStyling,
  customTextStyling,
}) => {
  return (
    <TouchableOpacity
      style={[stlyes.categoryButton, customButtonStyling]}
      onPress={
        onPress ||
        (() =>
          console.log(
            `${title} - To use this button, ensure that you have set up a callback function (onPress).`
          ))
      }
    >
      <Text style={[stlyes.titleText, customTextStyling]}>
        <ButtonLarge>{title || 'Button'}</ButtonLarge>
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const stlyes = StyleSheet.create({
  categoryButton: {
    padding: 15,
    margin: 5,
    backgroundColor: '#53B175',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 15,
    color: '#0A0A0A',
  },
});
