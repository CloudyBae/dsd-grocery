import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

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
              ? customRadioColor || 'black'
              : 'transparent',
          },
        ]}
      />
      <Caption style={[styles.labelTitle, { color: customTextColor || 'black' }]}>
        {label || 'label'}
      </Caption>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
