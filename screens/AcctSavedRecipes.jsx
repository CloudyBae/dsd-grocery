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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.homeContainer}>
            <Pressable
              onPress={() => navigation.navigate('Recipe', { id: item.id })}
            >
              <AcctRecipeBar />
            </Pressable>
            {/* <View style={styles.buttonContainer}>
              <MainButton title='Save' />
            </View> */}
          </View>
        </ScrollView>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  homeContainer: {
    backgroundColor: '#f2f2f2',
  },
});

export default AcctSavedRecipesScreen;
