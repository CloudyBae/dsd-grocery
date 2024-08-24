import React, { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RecipeCard from './RecipeCard';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { USER_API_IP_URL } from '@env';

const RecipeList = ({ title, scrollEnabled, numberOfRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const navigation = useNavigation();
  const { userId } = '1';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `http://${USER_API_IP_URL}:8000/api/favorite_recipes/${userId}`
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

export default RecipeList;

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
