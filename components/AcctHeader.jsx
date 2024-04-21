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
import { Body, HeaderTitle } from './Typography';

const AcctHeader = () => {
  const name = 'John Smith';
  const email = 'john-smith@gmail.com';

  return (
    <View style={styles.headerContainer}>
      <View style={styles.userImg}>
        <Image
          source={require('../assets/Avatar.png')}
          style={{ width: 60, height: 60, borderRadius: 150 / 2 }}
        />
      </View>

      <View
        style={{
          ...styles.columnContainer,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <View style={styles.rowContainer}>
          <HeaderTitle>{name}</HeaderTitle>
          <Pressable
            style={styles.iconContainer}
            onPress={() => console.log('Edit Icon Clicked')}
          >
            <EvilIcons name='pencil' size={20} color='#52B175' />
          </Pressable>
        </View>
        <Body> {email}</Body>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 80,
    paddingBottom: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#52B175',
    borderLeftColor: 'white',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  name: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 20,
    width: 20,
  },
  userImg: {
    marginLeft: 30,
    marginRight: 10,
    overflow: 'hidden',
  },
});

export default AcctHeader;
