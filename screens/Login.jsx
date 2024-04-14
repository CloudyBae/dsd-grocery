import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Dimensions } from 'react-native';
import ThirdPartySignIn from '../components/ThirdPartySignIn';
import LoginLogo from '../assets/Login.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginContainer}>
          <Image source={LoginLogo} style={{ width: screenWidth, height: screenHeight * 0.3 }} resizeMode='contain' />
          <ThirdPartySignIn
            title='Facebook'
            icon='facebook'
            textColor='white'
            iconColor='white'
            backgroundColor='blue'
            style= {styles.loginButton}
            onPress={() => console.log('Facebook')}
          />
          <ThirdPartySignIn
            title='Google'
            textColor='gray'
            icon='google'
            iconColor='black'
            backgroundColor='white'
            style = {styles.loginButton}
            onPress={() => console.log('Google')}
          />
          <ThirdPartySignIn
            title='Apple'
            icon='apple'
            textColor='white'
            iconColor='white'
            backgroundColor='black'
            style = {styles.loginButton}
            onPress={() => console.log('Apple')}
          />
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
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 50,
  },
  loginButton:{
    padding: 10
  }
});
