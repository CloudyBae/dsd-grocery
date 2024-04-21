import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

const CategoryButton = ({
  title,
  onPress,
  customButtonStyling,
  customTextStyling,
}) => {
  return (
    <TouchableOpacity
      style={[styles.categoryButton, customButtonStyling]}
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
    backgroundColor: '#72C08F',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#0A0A0A',
  },
});
