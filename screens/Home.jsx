import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Nav from '../components/Nav';
import FlexContainer from '../containers/FlexContainer';
import RecipeList from '../components/RecipeList';
import CategoryButton from '../components/CategoryButton';
import Macro from '../components/Macro';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DietFilter from '../components/DietFilter';

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
              >
                <MaterialCommunityIcons
                  name='account-circle'
                  size={45}
                  color='black'
                />
              </TouchableOpacity>
              <View style={styles.macrosContainer}>
                <Macro macro='Carbs' percentage={20} goal={100} />
                <Macro macro='Protein' percentage={50} goal={100} />
                <Macro macro='Fat' percentage={70} goal={100} />
              </View>
            </View>
            <View>
              <DietFilter />
            </View>
            <FlexContainer>
              <CategoryButton title='Plan meal' />
            </FlexContainer>
            <RecipeList title='Favorite Recipes' numberOfRecipes={10} />
          </View>
        </ScrollView>
        <Nav />
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 10,
  },
});
