import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AddItemBar from '../components/AddItemBar';
import Nav from '../components/Nav';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall  } from '../components/Typography';

export const IngredientScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.ingredientsContainer}>
          <AddItemBar />
        </View>
      </ScrollView>
      <Nav style={styles.navBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingredientsContainer: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
