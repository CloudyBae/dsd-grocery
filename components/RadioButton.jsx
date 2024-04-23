import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = ({
  label,
  customRadioColor,
  customTextColor,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      style={styles.radioContainer}
    >
      <View
        style={[
          styles.radioCircle,
          {
            backgroundColor: isSelected
              ? customRadioColor || '#121212'
              : 'transparent',
          },
        ]}
      />
      <Text
        style={[styles.labelTitle, { color: customTextColor || '#121212' }]}
      >
        {label || 'label'}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  labelTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderColor: '#121212',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
