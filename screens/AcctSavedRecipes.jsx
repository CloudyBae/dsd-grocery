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
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from '../components/Typography';

export const AcctSavedRecipesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.homeContainer}>
            <AcctHeader />
            {/* <Text style={styles.title}>Saved Recipes</Text> */}
            <Pressable
              onPress={() => navigation.navigate('Recipe', { id: item.id })}
            >
              <AcctRecipeBar />
            </Pressable>
            <View style={styles.buttonContainer}>
              <MainButton title='Save' />
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
    backgroundColor: '#fff',
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});

export default AcctSavedRecipesScreen;
