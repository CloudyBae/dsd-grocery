import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Title } from '../components/Typography/index.js';
import { useNavigation } from '@react-navigation/native';

export const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.splashContainer}>
        <Title style={styles.title}>Zest</Title>
        <Title style={styles.subtitle}>online groceries</Title>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel='Next'
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        >
          <Title style={styles.buttonText}>Next</Title>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 40,
    color: '#FFF',
    lineHeight: 60,
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 24,
    color: '#FFF',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#53B175',
  },
});

export default SplashScreen;
