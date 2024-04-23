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
import { Text } from 'react-native';
import { useEffect, useState } from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation();
  // const [macroData, setMacroData] = useState(null);

  // useEffect(() => {
  //   const fetchMacros = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://172.25.192.1:8081/api/users/1/macros/'
  //       );
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       console.log('Macros data: ', data);
  //       setMacroData(data);
  //     } catch (error) {
  //       console.log('Error fetching Macros: ', error);
  //     }
  //   };

  //   fetchMacros();
  // }, []);

  const macroData = {
    Protein: 42.45,
    Fat: 176.25,
    Carbs: 81.30000000000001,
  };

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
                <Macro
                  macro='Carbs'
                  percentage={
                    macroData && macroData.Carbs ? macroData.Carbs : 0
                  }
                  goal={100}
                />
                <Macro
                  macro='Protein'
                  percentage={
                    macroData && macroData.Protein ? macroData.Protein : 0
                  }
                  goal={100}
                />
                <Macro
                  macro='Fat'
                  percentage={macroData && macroData.Fat ? macroData.Fat : 0}
                  goal={100}
                />
              </View>
            </View>
            <View style={styles.mainButtonsContainer}>
              <CategoryButton
                onPress={() => navigation.navigate('Ingredient')}
                customButtonStyling={{
                  width: '45%',
                  padding: 40,
                  borderRadius: 25,
                }}
                title='Pantry'
              />
              <CategoryButton
                customButtonStyling={{
                  width: '45%',
                  padding: 40,
                  borderRadius: 25,
                }}
                title='Recipes'
                onPress={() => navigation.navigate('Filter')}
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
            <FavoriteRecipesList numberOfRecipes={10} />
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
