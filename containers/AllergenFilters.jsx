import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox } from '@rneui/themed';

const AllergenFilters = () => {
  const [categories, setCategories] = useState([
    {
      id: 11,
      preference_name: 'Dairy',
      checked: false,
      key: 'Dairy',
      name: 'dietFilters'
    },
    {
      id: 12,
      preference_name: 'Egg',
      checked: false,
      key: 'Egg',
      name: 'dietFilters'
    },
    {
      id: 13,
      preference_name: 'Gluten',
      checked: false,
      key: 'Gluten',
      name: 'dietFilters'
    },
    {
      id: 14,
      preference_name: 'Grain',
      checked: false,
      key: 'Grain',
      name: 'dietFilters'
    },
    {
      id: 15,
      preference_name: 'Peanut',
      checked: false,
      key: 'Peanut',
      name: 'dietFilters'
    },
    {
      id: 16,
      preference_name: 'Seafood',
      checked: false,
      key: 'Seafood',
      name: 'dietFilters'
    },
    {
      id: 17,
      preference_name: 'Sesame',
      checked: false,
      key: 'Sesame',
      name: 'dietFilters'
    },
    {
      id: 18,
      preference_name: 'Shellfish',
      checked: false,
      key: 'Shellfish',
      name: 'dietFilters'
    },
    {
      id: 19,
      preference_name: 'Soy',
      checked: false,
      key: 'Soy',
      name: 'dietFilters'
    },
    {
      id: 20,
      preference_name: 'Sulfite',
      checked: false,
      key: 'Sulfite',
      name: 'dietFilters'
    },
    {
      id: 21,
      preference_name: 'Tree Nut',
      checked: false,
      key: 'Tree Nut',
      name: 'dietFilters'
    },
    {
      id: 22,
      preference_name: 'Wheat',
      checked: false,
      key: 'Wheat',
      name: 'dietFilters'
    },
  ]);

  const onValueChange = (item, index) => {
    const newCategory = [...categories];
    newCategory[index].isCheck = !item.isCheck;
    setCategories(newCategory);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allergies</Text>

      {categories.map((item, index) => {
        return (
          <CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            title={item.preference_name}
            checked={item.isCheck || false}
            onPress={() => onValueChange(item, index)}
            key={item.key}
            name={item.name}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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

export default AllergenFilters;