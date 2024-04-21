import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import ThirdPartySignIn from '../components/ThirdPartySignIn';
import GroceryBag from '../assets/GroceryBag.png';
import { Title } from '../components/Typography/index.js';
import { useNavigation } from '@react-navigation/native';
import Auth from '../components/Auth';
import { performOAuth } from '../components/Auth';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const LoginScreen = () => {
  const navigation = useNavigation();

  const handleGoogleSignIn = async () => {
    try {
      await performOAuth();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginContainer}>
          <View style={styles.titleContainer}>
            {/* <Image
              source={Lemon}
              style={{ height: 50, width: 60, marginRight: 10 }}
              resizeMode='contain'
            /> */}
            <Title
              style={{
                color: 'white',
                fontSize: 60,
                fontWeight: 'bold',
                lineHeight: 70,
              }}
            >
              Zest
            </Title>
            {/* <Image
              source={Lemon}
              style={{ height: 50, width: 60, marginLeft: 10 }}
              resizeMode='contain'
            /> */}
          </View>
          <Image
            source={GroceryBag}
            style={{
              width: screenWidth * 0.8,
              height: screenHeight * 0.4,
              marginBottom: 20,
            }}
            resizeMode='contain'
          />
          <ThirdPartySignIn
            title='Home'
            textColor='white'
            icon='home'
            backgroundColor='orange'
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.buttonSeparator} />
          <ThirdPartySignIn
            title='Google'
            textColor='gray'
            icon='google'
            iconColor='black'
            backgroundColor='white'
            style={styles.loginButton}
            onPress={handleGoogleSignIn}
          />
          <View style={styles.buttonSeparator} />
          <Auth />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72C08F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  loginButton: {
    padding: 15,
  },
  buttonSeparator: {
    height: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
