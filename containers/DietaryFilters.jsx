import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';

const DietaryFilters = () => {
 
  const [categories, setCategories] = useState([
    {
      id: 0,
      preference_name: 'Gluten Free',
      checked: false,
      key: 'Gluten Free',
      name: 'dietFilters'
    },
    {
      id: 1,
      preference_name: 'Ketogenic',
      checked: false,
      key: 'Ketogenic',
      name: 'dietFilters'
    },
    {
      id: 2,
      preference_name: 'Vegetarian',
      checked: false,
      key: 'Vegetarian',
      name: 'dietFilters'
    },
    {
      id: 3,
      preference_name: 'Lacto-Vegetarian',
      checked: false,
      key: 'Lacto-Vegetarian',
      name: 'dietFilters'
    },
    {
      id: 4,
      preference_name: 'Ovo-Vegetarian',
      checked: false,
      key: 'Ovo-Vegetarian',
      name: 'dietFilters'
    },
    {
      id: 5,
      preference_name: 'Vegan',
      checked: false,
      key: 'Vegan',
      name: 'dietFilters'
    },
    {
      id: 6,
      preference_name: 'Pescetarian',
      checked: false,
      key: 'Pescetarian',
      name: 'dietFilters'
    },
    {
      id: 7,
      preference_name: 'Paleo',
      checked: false,
      key: 'Paleo',
      name: 'dietFilters'
    },
    {
      id: 8,
      preference_name: 'Primal',
      checked: false,
      key: 'Primal',
      name: 'dietFilters'
    },
    {
      id: 9,
      preference_name: 'Low FODMAP',
      checked: false,
      key: 'Low FODMAP',
      name: 'dietFilters'
    },
    {
      id: 10,
      preference_name: 'Whole30',
      checked: false,
      key: 'Whole30',
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

export default DietaryFilters;