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
  ingredientsContainer: {
    backgroundColor: '#f2f2f2',
  },
});
