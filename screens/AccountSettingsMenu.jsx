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
import LogOutIcon from '../components/Icons/LogOutIcon.jsx';

export const AccountSettingsMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <AcctHeader />
        <View style={styles.menuItemContainer}>
          <View style={styles.menuItemInnerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('Dietary Preferences & Allergies')
              }
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                styles.menuItem,
              ]}
            >
              <Image
                source={require('../assets/donotenter.png')}
                style={styles.menuImg}
                resizeMode='cover'
              />
              <Body>Dietary Preferences & Allergies</Body>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Account Details')}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                styles.menuItem,
              ]}
            >
              <Image
                source={require('../assets/idcard.png')}
                style={styles.menuImgId}
                resizeMode='cover'
              />
              <Body>Account Details</Body>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Saved Recipes')}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                styles.menuItem,
              ]}
            >
              <Image
                source={require('../assets/pot.png')}
                style={styles.menuImg}
                resizeMode='cover'
              />
              <Body>Saved Recipes</Body>
            </Pressable>
          </View>

          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={[styles.buttonContainer, styles.button]}
          >
            <LogOutIcon style={styles.icon} />
            <ButtonText>Log Out</ButtonText>
          </Pressable>
        </View>
      </View>
      <Nav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  menuItemContainer: {
    alignContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
    gap: 32,
  },
  menuItemInnerContainer: {
    gap: 24,
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  menuImg: {
    height: 24,
    width: 24,
  },
  menuImgId: {
    height: 24,
    width: 24,
  },
  button: {
    backgroundColor: '#52B175',
    borderRadius: 18,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  icon: {
    color: '#121212',
  },
});
