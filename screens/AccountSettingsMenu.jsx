import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AcctHeader from '../components/AcctHeader';
import Nav from '../components/Nav';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from '../components/Typography';

export const AccountSettingsMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AcctHeader />
      <View
        style={{
          width: '80%',
          height: 2,
          backgroundColor: '#96d1ab',
          alignSelf: 'center',
        }}
      />

      <Pressable
        onPress={() => navigation.navigate('Dietary Preferences & Allergies')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.menuButton,
        ]}
      >
        <Image
          source={require('../assets/donotenter.png')}
          style={styles.tagImg}
          resizeMode='cover'
        />
        <Body style={styles.menuText}>Dietary Preferences & Allergies</Body>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Account Details')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.menuButton,
        ]}
      >
        <Image
          source={require('../assets/idcard.png')}
          style={styles.tagImgId}
          resizeMode='cover'
        />
        <Body style={styles.menuText}>Account Details</Body>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Saved Recipes')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.menuButton,
        ]}
      >
        <Image
          source={require('../assets/pot.png')}
          style={styles.tagImg}
          resizeMode='cover'
        />
        <Body style={styles.menuText}>Saved Recipes</Body>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.logOutButton,
        ]}
      >
        <Image
          source={require('../assets/logout.png')}
          style={styles.tagImg}
          resizeMode='cover'
        />
        <ButtonText style={styles.menuText}>Log Out</ButtonText>
      </Pressable>
      <Nav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  menuButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tagImg: {
    height: 24,
    width: 24,
  },
  tagImgId: {
    height: 24,
    width: 24,
  },
  logOutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});
