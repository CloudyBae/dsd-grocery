import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import AcctHeader from '../components/AcctHeader';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall  } from '../components/Typography';

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
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});

export default DietaryAllergenFilterScreen;
