import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Nav from '../components/Nav';
import FavoriteRecipesList from '../components/FavoriteRecipes';
import CategoryButton from '../components/CategoryButton';
import Macro from '../components/Macro';
import { useNavigation } from '@react-navigation/native';
import DietFilter from '../components/DietFilter';
import { StatusBar } from 'react-native';
import { Title } from '../components/Typography';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.screenContainer}>
            <View style={styles.macrosContainer}>
              <Macro macro='Carbs' percentage={20} goal={100} />
              <Macro macro='Protein' percentage={50} goal={100} />
              <Macro macro='Fat' percentage={70} goal={100} />
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.mainButtonsContainer}>
                <CategoryButton
                  onPress={() => navigation.navigate('Ingredients')}
                  title='Pantry'
                />
                <CategoryButton
                  title='Recipes'
                  onPress={() => navigation.navigate('Filter')}
                />
              </View>
              <View style={styles.favoriteRecipesContainer}>
                <Title>Favorite Recipes</Title>
              </View>
              <DietFilter />
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
  screenContainer: {
    backgroundColor: '#f2f2f2',
    // padding: 10,
    // marginBottom: 50,
  },
  innerContainer: {
    paddingHorizontal: 16,
  },
  macrosContainer: {
    backgroundColor: '#fff',
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  mainButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 48,
  },
  favoriteRecipesContainer: {
    alignItems: 'center',
  },
});
