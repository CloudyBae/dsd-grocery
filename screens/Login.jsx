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
import Header from '../components/Header';
import GroceryBag from '../assets/GroceryBag.png';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginContainer}>
          <Header pageTitle="Zest"/>
          <Image
            source={GroceryBag}
            style={{ width: screenWidth * 0.8, height: screenHeight * 0.4 }}
            resizeMode='contain'
          />
          <ThirdPartySignIn
            title='Facebook'
            icon='facebook'
            textColor='white'
            iconColor='white'
            backgroundColor='blue'
            style={styles.loginButton}
            onPress={() => console.log('Facebook')}
          />
          <View style={styles.buttonSeparator} />
          <ThirdPartySignIn
            title='Google'
            textColor='gray'
            icon='google'
            iconColor='black'
            backgroundColor='white'
            style={styles.loginButton}
            onPress={() => console.log('Google')}
          />
          <View style={styles.buttonSeparator} /> 
          <ThirdPartySignIn
            title='Apple'
            icon='apple'
            textColor='white'
            iconColor='white'
            backgroundColor='black'
            style={styles.loginButton}
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
  loginButton: {
    padding: 10,
  },
  buttonSeparator: {
    height: 10, 
}});
