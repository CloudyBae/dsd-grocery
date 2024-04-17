import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import AcctHeader from '../components/AcctHeader';

export const AccountSettingsMenu = () => {
  return (
    <View style={styles.container}>
      <AcctHeader />
      <View
        style={{
          width: '80%',
          height: 2,
          backgroundColor: '#96d1ab',
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 15,
        }}
      />

      <Pressable
        onPress={() => console.log('Button Pressed')}
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
        <Text style={styles.menuText}>Dietary Preferences</Text>
      </Pressable>
      <Pressable
        onPress={() => console.log('Button Pressed')}
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
        <Text style={styles.menuText}>My Details</Text>
      </Pressable>
      <Pressable
        onPress={() => console.log('Button Pressed')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.menuButton,
        ]}
      >
        <Image
          source={require('../assets/broc.png')}
          style={styles.tagImg}
          resizeMode='cover'
        />
        <Text style={styles.menuText}>Favorite Ingredients</Text>
      </Pressable>
      <Pressable
        onPress={() => console.log('Button Pressed')}
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
        <Text style={styles.menuText}>Favorite Recipes</Text>
      </Pressable>

      <Pressable
        onPress={() => console.log('Button Pressed')}
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
    paddingLeft: 30,
    borderWidth: 0,

    height: 75,
    width: '90%',
  },

  tagImg: {
    height: 30,
    width: 30,
    marginRight: 7,
  },
  tagImgId: {
    height: 30,
    width: 40,
    marginRight: 7,
  },
  logOutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '90%',
    marginTop: '35%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#96d1ab',
  },
});
