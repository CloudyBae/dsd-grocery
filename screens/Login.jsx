import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ThirdPartySignIn from '../components/ThirdPartySignIn';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginContainer}>
          <ThirdPartySignIn
            title='Facebook'
            icon='facebook'
            textColor='white'
            iconColor='white'
            backgroundColor='blue'
            onPress={() => console.log('Facebook')}
          />
          <ThirdPartySignIn
            title='Google'
            textColor='gray'
            icon='google'
            iconColor='black'
            backgroundColor='white'
            onPress={() => console.log('Google')}
          />
          <ThirdPartySignIn
            title='Apple'
            icon='apple'
            textColor='white'
            iconColor='white'
            backgroundColor='black'
            onPress={() => console.log('Apple')}
          />
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
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 50,
  },
});
