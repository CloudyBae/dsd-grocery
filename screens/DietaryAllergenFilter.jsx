import { Text, ScrollView, View, StyleSheet } from 'react-native';
import DietFilter from '../components/DietFilter';
import AllergenFilters from '../containers/AllergenFilters';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';

export const DietaryAllergenFilterScreen = () => {
  return (

    <ScrollView style={styles.container}>

      <DietFilter/>
      <AllergenFilters/>

      <View style={styles.footer}>
        <MainButton/>
      </View>

      <Nav/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgb(240,240,240)'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})

export default DietaryAllergenFilterScreen;