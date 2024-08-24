import { StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonLarge } from './Typography';
import { MaterialIcons } from '@expo/vector-icons';

const CategoryButton = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={[styes.categoryButton]}
      onPress={
        onPress ||
        (() =>
          console.log(
            `${title} - To use this button, ensure that you have set up a callback function (onPress).`
          ))
      }
    >
      <MaterialIcons name={icon} size={24} color='#72C08F' />
      <ButtonLarge>{title || 'Button'}</ButtonLarge>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styes = StyleSheet.create({
  categoryButton: {
    alignItems: 'center',
    backgroundColor: '#F7FCF8',
    borderColor: '#52B175',
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
    paddingVertical: 30,
    gap: 5,
  },
});
