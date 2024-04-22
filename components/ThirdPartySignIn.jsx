import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {
  ButtonText,
} from './Typography';

const ThirdPartySignIn = ({
  title,
  icon,
  backgroundColor,
  textColor,
  onPress,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: backgroundColor },
        backgroundColor === '#fff' || backgroundColor === undefined
          ? { borderWidth: 1 }
          : null,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        {icon ? (
          <FontAwesome name={icon} size={24} color={iconColor || '#121212'} />
        ) : (
          <Text>-</Text>
        )}
      </View>
      <View style={styles.titleContainer}>
        <ButtonText style={{ color: textColor || '#121212' }}>
          Continue with {title}
        </ButtonText>
      </View>
    </TouchableOpacity>
  );
};

export default ThirdPartySignIn;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 18,
    flexDirection: 'row',
    gap: 42,
    padding: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: '#121212',
  },
  titleContainer: {
    justifyContent: 'center',
  },
});
