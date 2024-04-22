import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Nav from '../components/Nav';
import FavoriteRecipesList from '../components/FavoriteRecipes';
import CategoryButton from '../components/CategoryButton';
import Macro from '../components/Macro';
import { useNavigation } from '@react-navigation/native';
import DietFilter from '../components/DietFilter';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from '../components/Typography';
import { StatusBar } from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.macrosContainer}>
            <Macro macro='Carbs' percentage={20} goal={100} />
            <Macro macro='Protein' percentage={50} goal={100} />
            <Macro macro='Fat' percentage={70} goal={100} />
          </View>
          <View style={styles.homeContainer}>
            <View>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Ingredients button was pressed!'
                onPress={() => navigation.navigate('Settings')}
              ></TouchableOpacity>
            </View>
            <View style={styles.mainButtonsContainer}>
              <CategoryButton
                onPress={() => navigation.navigate('Ingredient')}
                title='Pantry'
              />
              <CategoryButton
                title='Recipes'
                onPress={() => navigation.navigate('Filter')}
              />
            </View>
            <View style={styles.favoriteRecipesContainer}>
              <Title style={styles.favoriteRecipesTitle}>
                Favorite Recipes
              </Title>
            </View>
            <View style={styles.dietFilterContainer}>
              <DietFilter />
            </View>
            <View style={styles.recipeListContainer}>
              <FavoriteRecipesList numberOfRecipes={10} />
            </View>
          </View>
        </ScrollView>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    paddingTop: 16,
    flex: 1,
  },
  macrosContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 9,
    padding: 16,
  },
  mainButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 48,
  },
  favoriteRecipesContainer: {
    marginBottom: 16,
  },
  favoriteRecipesTitle: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: '#c2c2c2',
    width: '100%',
    marginBottom: 12,
  },
  dietFilterContainer: {
    marginBottom: 32,
  },
});
