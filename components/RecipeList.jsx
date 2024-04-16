// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import RecipeCard from './RecipeCard';
// import { FlatList } from 'react-native';
// import { useEffect, useState } from 'react';
// import { SPOONACULAR_API_KEY } from '@env';

// const RecipeList = ({ title, scrollEnabled, numberOfRecipes }) => {
//   const [recipes, setRecipes] = useState([]);

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=${numberOfRecipes || 1}`
//       );
//       const data = await response.json();
//       console.log('data.recipes: ', data.recipes);
//       setRecipes(data.recipes);
//     } catch (error) {
//       console.log('Error fetching data: ', error);
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const renderRecipe = ({ item }) => {
//     return (
//       <Pressable onPress={() => console.log('Recipe Detail Page')}>
//         <RecipeCard
//           title={item.title}
//           image={item.image}
//           minutes={item.readyInMinutes || 0}
//           rating={item.aggregateLikes}
//         />
//       </Pressable>
//     );
//   };
//   return (
//     <View>
//       <Text style={style.titleText}>{title}</Text>
//       {recipes.length === 0 ? (
//         <View style={style.noRecipes}>
//           <Text style={style.noRecipesText}>No recipes found.</Text>
//         </View>
//       ) : (
//         <FlatList
//           numColumns={2}
//           scrollEnabled={scrollEnabled || false}
//           columnWrapperStyle={style.columnWrapper}
//           data={recipes}
//           renderItem={renderRecipe}
//         />
//       )}
//     </View>
//   );
// };

// export default RecipeList;

// const style = StyleSheet.create({
//   titleText: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//     marginVertical: 5,
//     marginHorizontal: 5,
//   },
//   noRecipes: {
//     padding: 100,
//     alignItems: 'center',
//   },
//   noRecipesText: {
//     fontSize: 18,
//   },
// });
