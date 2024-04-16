import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

      <View style={styles.header} numberOfLines={null}>
        <Text style={styles.name} numberOfLines={null}>
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
        </Text>
        <Text style={styles.email} numberOfLines={null}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 40,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#52B175',
    borderLeftColor: 'white',
    borderWidth: 3,
    backgroundColor: 'white',
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