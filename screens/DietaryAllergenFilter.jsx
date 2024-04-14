import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';

export const DietaryAllergenFilterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <DietaryFilters />
          <AllergenFilters />

          <View style={styles.footer}>
            <MainButton />
          </View>
        </ScrollView>
        <Nav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgb(240,240,240)',
  },
  footer: {},
});

export default DietaryAllergenFilterScreen;
