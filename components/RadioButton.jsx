import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const RadioButton = ({ label, customRadioColor, customTextColor, onPress }) => {
  const [selected, setSelected] = useState('');
  const handleSelectToggle = () => {
    setSelected(!selected);
    onPress(label);
  };

  return (
    <TouchableOpacity
      onPress={handleSelectToggle}
      style={styles.radioContainer}
    >
      <View
        style={[
          styles.radioCircle,
          selected && { backgroundColor: customRadioColor || 'black' },
        ]}
      ></View>
      <Text style={[styles.labelTitle, { color: customTextColor || 'black' }]}>
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
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
