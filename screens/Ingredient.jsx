import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AddItemBar from '../components/AddItemBar';
import Nav from '../components/Nav';

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
    marginTop: 25,
    marginBottom: 50,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
