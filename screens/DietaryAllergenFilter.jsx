import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import AcctHeader from '../components/AcctHeader';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';

export const DietaryAllergenFilterScreen = () => {
  const navigation = useNavigation();

  const getDietaryFiltersData = () => {
      
  };

  const handleSave = async () => {
    try {
      const dietaryFiltersData = await getDietaryFiltersData();

      const filterData = {
        dietaryFilters: dietaryFiltersData,
      };

      const response = await fetch('http://localhost:3001/filters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
      });

      if (!response.ok) {
        throw new Error('Failed to save filters');
      }

      console.log('Filters saved successfully');
    } catch (error) {
      console.error('Error saving filters:', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.homeContainer}>
            <AcctHeader />
            <DietaryFilters/>

            <View style={styles.buttonContainer}>
              <MainButton title='Save' 
                onPress={(handleSave)}/>
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
    padding: 10,
    marginBottom: 50,
  },
  buttonContainer: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});

export default DietaryAllergenFilterScreen;
