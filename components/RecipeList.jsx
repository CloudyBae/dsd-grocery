import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import RecipeCard from './RecipeCard';
import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';

const RecipeList = ({ title, scrollEnabled, numberOfRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = '90ce20e792384e9a99fa0bd3d950c094';

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${numberOfRecipes}`
      );
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const renderRecipe = ({ item }) => {
    return (
      <Pressable onPress={() => console.log('Recipe Detail Page')}>
        <RecipeCard
          title={item.title}
          image={item.image}
          minutes={item.readyInMinutes || 0}
          rating={item.aggregateLikes}
        />
      </Pressable>
    );
  };
  return (
    <>
      <Text style={style.titleText}>{title}</Text>
      <FlatList
        numColumns={2}
        scrollEnabled={scrollEnabled || false}
        columnWrapperStyle={style.columnWrapper}
        data={recipes}
        renderItem={renderRecipe}
      />
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
});
