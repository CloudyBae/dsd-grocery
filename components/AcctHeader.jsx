import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Body, Title } from './Typography';

const AcctHeader = () => {
  const name = 'John Smith';
  const email = 'john-smith@gmail.com';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={styles.userImg}>
        <Image
          source={require('../assets/Avatar.png')}
          style={{ width: 110, height: 110, borderRadius: 150 / 2 }}
        />
      </View>
      <View style={styles.innerTextContainer}>
          <Title>{name}</Title>
        <Body>{email}</Body>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // paddingHorizontal: 16,
    backgroundColor: '#fff',
    // paddingVertical: 16,
    height: '40%',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
    padding: 56,
    borderRadius: 18,
  },
  innerTextContainer: {
    gap: 4,
  },
});

export default AcctHeader;
