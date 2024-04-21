import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AcctHeader from '../components/AcctHeader';
import Nav from '../components/Nav';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall  } from '../components/Typography';

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
        <Text style={styles.menuText}>Dietary Preferences & Allergies</Text>
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
        <Text style={styles.menuText}>Account Details</Text>
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
        <Text style={styles.menuText}>Saved Recipes</Text>
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
        <Text style={styles.menuText}>Log Out</Text>
      </Pressable>
      <Nav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  menuButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0,

    height: 75,
    width: '90%',
  },
  tagImg: {
    height: 30,
    width: 30,
  },
  tagImgId: {
    height: 30,
    width: 40,
  },
  logOutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '90%',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#96d1ab',
  },
});
