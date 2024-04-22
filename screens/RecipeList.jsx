import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import AddRecipeBar from '../components/AddRecipeBar';
import {
  Title,
} from '../components/Typography';
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
  recipeContainer: {},
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default RecipeScreen;
