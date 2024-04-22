import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Title,
  Body,
} from './Typography';

const AcctHeader = () => {
  const name = 'John Smith';
  const email = 'john-smith@gmail.com';

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerInnerContainer}>
        <View style={styles.userImg}>
          <Image
            source={require('../assets/Avatar.png')}
            style={{ width: 90, height: 90, borderRadius: 180 / 2 }}
          />
        </View>

        <View style={styles.headerTextContainer} numberOfLines={null}>
          <Title style={styles.name} numberOfLines={null}>
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
          </Title>
          <Body style={styles.email} numberOfLines={null}>
            {email}
          </Body>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '50%',
    marginBottom: 32,
    borderRadius: 18,
  },
  headerInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    gap: 24,
  },
  headerTextContainer: {
    gap: 4,
  },
});

export default AcctHeader;
