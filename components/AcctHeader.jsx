import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from './Typography';

const AcctHeader = () => {
  const name = 'John Smith';
  const email = 'john-smith@gmail.com';
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userImg}>
        <Image
          source={require('../assets/Avatar.png')}
          style={{ width: 60, height: 60, borderRadius: 180 / 2 }}
        />
      </View>

      <View style={styles.header} numberOfLines={null}>
        <Body style={styles.name} numberOfLines={null}>
          {name}{' '}
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Edit Icon Clicked')}
          >
            <MaterialCommunityIcons
              name='lead-pencil'
              size={20}
              color='#52B175'
            />
          </TouchableOpacity>
        </Body>
        <BodySmall style={styles.email} numberOfLines={null}>
          {email}
        </BodySmall>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    borderTopColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#52B175',
    borderLeftColor: '#fff',
    borderWidth: 3,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  name: {
    flex: 1,
  },
  email: {
    flex: 1,
  },
  iconContainer: {
    height: 20,
    width: 20,
  },
  userImg: {
    overflow: 'hidden',
  },
});

export default AcctHeader;
