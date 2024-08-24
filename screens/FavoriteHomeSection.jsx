
import DietFilter from '../components/DietFilter';
import FavoriteRecipesList from '../components/FavoriteRecipes';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Title } from '../components/Typography';

export const FavoriteHomeSection = (props) => {
  return (
    <ScrollView style={{ paddingTop: 40 }}>
      <Title style={{ marginBottom: 10 }}>Favorite Recipes</Title>
      <View style={styles.dietFilterContainer}>
        <DietFilter />
      </View>
      <View style={styles.recipeListContainer}>
        <FavoriteRecipesList numberOfRecipes={10} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  favoriteRecipesContainer: {},

  dietFilterContainer: {
    marginBottom: 32,
  },
});
