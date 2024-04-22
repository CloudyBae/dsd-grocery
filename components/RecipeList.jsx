import React, { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import RecipeCard from './RecipeCard';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../auth/auth-context';
import {
  Body,
} from './Typography';

const RecipeList = ({ title, scrollEnabled, numberOfRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);

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
          <Body style={style.noRecipesText}>No Favorite Recipes</Body>
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

export default RecipeList;

const style = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
  noRecipes: {
    alignItems: 'center',
  },
});
