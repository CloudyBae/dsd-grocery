import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';

export default function DietaryFilters() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      label: 'Gluten Free',
      checked: false,
      key: 'Gluten Free',
    },
    {
      id: 1,
      label: 'Ketogenic',
      checked: false,
      key: 'Ketogenic',
    },
    {
      id: 2,
      label: 'Vegetarian',
      checked: false,
      key: 'Vegetarian',
    },
    {
      id: 3,
      label: 'Lacto-Vegetarian',
      checked: false,
      key: 'Lacto-Vegetarian',
    },
    {
      id: 4,
      label: 'Ovo-Vegetarian',
      checked: false,
      key: 'Ovo-Vegetarian',
    },
    {
      id: 5,
      label: 'Vegan',
      checked: false,
      key: 'Vegan',
    },
    {
      id: 6,
      label: 'Pescetarian',
      checked: false,
      key: 'Pescetarian',
    },
    {
      id: 7,
      label: 'Paleo',
      checked: false,
      key: 'Paleo',
    },
    {
      id: 8,
      label: 'Primal',
      checked: false,
      key: 'Primal',
    },
    {
      id: 9,
      label: 'Low FODMAP',
      checked: false,
      key: 'Low FODMAP',
    },
    {
      id: 10,
      label: 'Whole30',
      checked: false,
      key: 'Whole30',
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
            title={item.label}
            checked={item.isCheck || false}
            onPress={(val) => onValueChange(item, index)}
            key={item.key}
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
