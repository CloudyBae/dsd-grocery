import React from 'react'; // Import useEffect from react
import { SafeAreaView, ScrollView, View, StyleSheet, Pressable } from 'react-native';
import AddRecipeBar from '../components/AddRecipeBar';
import { Title } from '../components/Typography/index.js';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';

export const RecipeListScreen = ({ route }) => {
  const { recipeData } = route.params;
  const navigation = useNavigation();

  const handleRecipePress = (recipeId) => {
    navigation.navigate('Recipe', { id: recipeId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.recipeContainer}>
          <Title style={styles.title}>Recipes</Title>
          {recipeData.map((recipe, index) => (
            <Pressable key={index} onPress={() => handleRecipePress(recipe.recipe_id)}>
              <AddRecipeBar
                name={recipe.name}
                image={recipe.image}
                numMinutes={recipe.time}
                numIngredients={recipe.ingredient_count}
              />
            </Pressable>
          ))}
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

export default RecipeListScreen;
