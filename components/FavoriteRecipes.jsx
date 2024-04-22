import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RecipeCard from './RecipeCard';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavoriteRecipesList = ({ scrollEnabled }) => {
  const [recipes, setRecipes] = useState([]);
  const navigation = useNavigation();
  const { userId } = '8950a7c8-20c3-4d77-9a10-3622e07fd3dd';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          'http://localhost:8000/api/favorite_recipes/${userId}'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Favorite recipes data: ', data);
        setRecipes(data);
      } catch (error) {
        console.log('Error fetching favorite recipes: ', error);
      }
    };

    fetchRecipes();

    return () => {};
  }, [userId]);

  const renderRecipe = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate('Recipe', { id: item.id })}>
        <RecipeCard
          title={item.name}
          image={item.image}
          minutes={item.minutes || 0}
          rating={item.likes}
        />
      </Pressable>
    );
  };
  return (
    <>
      {recipes?.length === 0 ? (
        <View style={style.noRecipes}>
          <Text style={style.noRecipesText}>No Favorite Recipes</Text>
        </View>
      ) : (
        <FlatList
          numColumns={2}
          scrollEnabled={scrollEnabled || false}
          columnWrapperStyle={style.columnWrapper}
          data={recipes}
          renderItem={renderRecipe}
        />
      )}
    </>
  );
};

export default FavoriteRecipesList;

const style = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  noRecipes: {
    padding: 100,
    alignItems: 'center',
  },
  noRecipesText: {
    fontSize: 18,
  },
});
