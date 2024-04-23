import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
        <Text style={{ color: textColor || '#121212', fontSize: 20 }}>
          Continue with {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ThirdPartySignIn;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    gap: 10,
    borderRadius: 13,
    width: 320,
  },
  iconContainer: {
    width: 20,
  },
  titleContainer: {
    flex: 1,
  },
});
