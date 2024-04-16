import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import AcctHeader from '../components/AcctHeader';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';

export const DietaryAllergenFilterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.homeContainer}>
            
            <AcctHeader />
            <DietaryFilters />
            <AllergenFilters />

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
  },
  buttonContainer: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});

export default DietaryAllergenFilterScreen;
