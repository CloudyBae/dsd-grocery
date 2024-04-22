import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';

export const DietaryAllergenFilterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          style={styles.preferencesContainer}
          contentContainerStyle={styles.contentContainer}
        >
          <DietaryFilters />
          <AllergenFilters />

          <MainButton title='Save' />
        </ScrollView>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    gap: 24,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 96,
  },
});

export default DietaryAllergenFilterScreen;
