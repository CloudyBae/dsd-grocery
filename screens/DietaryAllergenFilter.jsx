import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import AcctHeader from '../components/AcctHeader';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';

export const DietaryAllergenFilter = () => {
  return (
    <ScrollView style={styles.menuContainer}>
      <DietaryFilters />
      <AllergenFilters />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    padding: 60,
    paddingTop: 70,
    backgroundColor: '#fff',
  },
});

export default DietaryAllergenFilter;
