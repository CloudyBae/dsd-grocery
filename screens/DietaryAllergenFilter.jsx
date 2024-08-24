import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import AcctHeader from '../components/AcctHeader';
import { CheckBox } from '@rneui/themed';
import CategoryButton from '../components/CategoryButton';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';
import { USER_API_IP_URL } from '@env';

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
      `http://${USER_API_IP_URL}:8000/api/users/{user_pk}/dietaryPreferences/{id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
      }
    );
    //if (!response.ok) {
    //  throw new Error('Failed to save filters');
    //}

    //console.log('Filters saved successfully');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.homeContainer}>
            <Text style={styles.title}>Dietary Requirements</Text>

            {categories.map((item, index) => {
              return (
                <CheckBox
                  // Use ThemeProvider to change the defaults of the checkbox
                  checkedColor='#52B175'
                  backgroundColor='#f0f0f0'
                  title={item.preference_name}
                  checked={item.isCheck || false}
                  onPress={() => onValueChange(item, index)}
                  key={item.key}
                  name={item.name}
                  id={item.id}
                />
              );
            })}

            <View style={styles.buttonContainer}>
              <CategoryButton title='Save' onPress={() => handleSave()} />
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
    padding: 40,
    paddingTop: 0,
    marginBottom: 50,
  },
  buttonContainer: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgb(255,255,255)',
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DietaryAllergenFilterScreen;
