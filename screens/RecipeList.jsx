import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import AddRecipeBar from '../components/AddRecipeBar';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall  } from '../components/Typography';
import Nav from '../components/Nav';

export const RecipeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.recipeContainer}>
          <Title style={styles.title}>Recipes</Title>
          <AddRecipeBar />
        </View>
      </ScrollView>
      <Nav style={styles.navBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipeContainer: {
    padding: 10,
    marginTop: 25,
    fontFamily: 'Gilroy-Bold',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 25,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default RecipeScreen;
