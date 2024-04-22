import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DietaryFilters from '../containers/DietaryFilters';
import AllergenFilters from '../containers/AllergenFilters';
import MainButton from '../components/MainButton';
import Nav from '../components/Nav';

export const DietaryAllergenFilterScreen = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = useState([
    {
      id: 0,
      preference_name: 'Gluten Free',
      key: 'Gluten Free',
      isCheck: false,
    },
    {
      id: 1,
      preference_name: 'Ketogenic',
      key: 'Ketogenic',
      isCheck: false,
    },
    {
      id: 2,
      preference_name: 'Vegetarian',
      key: 'Vegetarian',
      isCheck: false,
    },
    {
      id: 3,
      preference_name: 'Lacto-Vegetarian',
      key: 'Lacto-Vegetarian',
      isCheck: false,
    },
    {
      id: 4,
      preference_name: 'Ovo-Vegetarian',
      key: 'Ovo-Vegetarian',
      isCheck: false,
    },
    {
      id: 5,
      preference_name: 'Vegan',
      key: 'Vegan',
      isCheck: false,
    },
    {
      id: 6,
      preference_name: 'Pescetarian',
      key: 'Pescetarian',
      isCheck: false,
    },
    {
      id: 7,
      preference_name: 'Paleo',
      key: 'Paleo',
      isCheck: false,
    },
    {
      id: 8,
      preference_name: 'Primal',
      key: 'Primal',
      isCheck: false,
    },
    {
      id: 9,
      preference_name: 'Low FODMAP',
      key: 'Low FODMAP',
      isCheck: false,
    },
    {
      id: 10,
      preference_name: 'Whole30',
      key: 'Whole30',
      isCheck: false,
    },
  ]);

  const onValueChange = (item, index) => {
    const newCategory = [...categories];
    newCategory[index].isCheck = !item.isCheck;
    setCategories(newCategory);
    return newCategory;
  };

  const handleSave = () => {
    const dietaryFiltersData = categories;

    const filterData = {
      dietaryFilters: dietaryFiltersData,
    };

    const response = fetch(
      'http://localhost:8000/api/users/{user_pk}/dietaryPreferences/{id}',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
      }
    );
  };

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
