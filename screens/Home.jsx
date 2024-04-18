import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Nav from '../components/Nav';
import RecipeList from '../components/RecipeList';
import CategoryButton from '../components/CategoryButton';
import Macro from '../components/Macro';
import { useNavigation } from '@react-navigation/native';
import DietFilter from '../components/DietFilter';
import { Text } from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.homeContainer}>
            <View>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Ingredients button was pressed!'
                onPress={() => navigation.navigate('Settings')}
              ></TouchableOpacity>
              <View style={styles.macrosContainer}>
                <Macro macro='Carbs' percentage={20} goal={100} />
                <Macro macro='Protein' percentage={50} goal={100} />
                <Macro macro='Fat' percentage={70} goal={100} />
              </View>
            </View>
            <View style={styles.mainButtonsContainer}>
              <CategoryButton
                customButtonStyling={{ padding: 40, borderRadius: 25 }}
                title='Pantry'
              />
              <CategoryButton
                customButtonStyling={{ padding: 40, borderRadius: 25 }}
                title='Recipes'
                onPress={() => navigation.navigate('Recipe')}
              />
            </View>
            <View style={styles.favoriteRecipesContainer}>
              <Text style={styles.favoriteRecipesTitle}>Favorite Recipes</Text>
            </View>
            <View style={styles.separatorContainer}>
              <View style={styles.separator}></View>
              <View style={styles.separator}></View>
            </View>
            <DietFilter />
            <RecipeList numberOfRecipes={10} />
          </View>
        </ScrollView>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    padding: 10,
    marginTop: 25,
    marginBottom: 50,
  },
  macrosContainer: {
    backgroundColor: '#72C08F',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 5,
    padding: 20,
    borderRadius: 10,
  },
  mainButtonsContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  favoriteRecipesContainer: {
    alignItems: 'center',
  },
  favoriteRecipesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  separator: {
    height: 2,
    width: 100,
    borderColor: '#52B175',
    backgroundColor: '#52B175',
    borderWidth: 1,
  },
});
