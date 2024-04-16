import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AcctRecipeBar from '../components/AcctRecipeBar';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';

export const AcctSavedRecipesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.homeContainer}>
            <Text style={styles.title}>Saved Recipes</Text>

            <AcctRecipeBar />

            <View style={styles.buttonContainer}>
              <MainButton title='Save' />
            </View>
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
    fontFamily: 'Gilroy-Bold',
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonContainer: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});

export default AcctSavedRecipesScreen;
