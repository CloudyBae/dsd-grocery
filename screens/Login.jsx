import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import GroceryBag from '../assets/GroceryBag.png';
import { useNavigation } from '@react-navigation/native';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from '../components/Typography';
import { StatusBar } from 'react-native';
import Auth from '../components/Auth.jsx';
import ThirdPartySignIn from '../components/ThirdPartySignIn';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#52B175' barStyle='light-content' />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginContainer}>
          <View style={styles.titleContainer}>
            <Title
              style={{
                color: '#fff',
                fontSize: 60,
                fontWeight: 'bold',
                lineHeight: 70,
              }}
            >
              Zest
            </Title>
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
            textColor='#fff'
            icon='home'
            backgroundColor='orange'
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home')}
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
    backgroundColor: '#52B175',
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
    // padding: 20,
  },
});
