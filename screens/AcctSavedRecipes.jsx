import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import AcctHeader from '../components/AcctHeader';
import AcctRecipeBar from '../components/AcctRecipeBar';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';
import { HeaderTitle, Title } from '../components/Typography';

export const AcctSavedRecipes = () => {
  return (
    <View style={styles.container}>
      <Title>Saved Recipes</Title>
      <Pressable onPress={() => navigation.navigate('Recipe')}>
        <AcctRecipeBar />
      </Pressable>
      <View style={styles.buttonContainer}>
        <MainButton title='Save' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 60,
    padding: 20,
  },
  homeContainer: {
    padding: 10,
    marginBottom: 50,
    fontFamily: 'Gilroy-Bold',
    backgroundColor: 'white',
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 20,
  },
  buttonContainer: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});

export default AcctSavedRecipes;
