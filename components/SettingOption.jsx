import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Body } from './Typography';

export const SettingOption = ({ title, icon, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View
        style={{
          ...styles.rowContainer,
          justifyContent: 'flex-start',
          gap: 10,
        }}
      >
        {icon}
        <Body style={{ color: '#181725' }}>{title}</Body>
      </View>
      <Ionicons name='chevron-forward' size={24} color='#121212' />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
