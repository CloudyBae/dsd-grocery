import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';

export default function AllergenFilters() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      label: 'Dairy',
      checked: false,
      key: 'Dairy',
    },
    {
      id: 1,
      label: 'Egg',
      checked: false,
      key: 'Egg',
    },
    {
      id: 2,
      label: 'Gluten',
      checked: false,
      key: 'Gluten',
    },
    {
      id: 3,
      label: 'Grain',
      checked: false,
      key: 'Grain',
    },
    {
      id: 4,
      label: 'Peanut',
      checked: false,
      key: 'Peanut',
    },
    {
      id: 5,
      label: 'Seafood',
      checked: false,
      key: 'Seafood',
    },
    {
      id: 6,
      label: 'Sesame',
      checked: false,
      key: 'Sesame'
    },
    {
      id: 7,
      label: 'Shellfish',
      checked: false,
      key: 'Shellfish',
    },
    {
      id: 8,
      label: 'Soy',
      checked: false,
      key: 'Soy',
    },
    {
      id: 9,
      label: 'Sulfite',
      checked: false,
      key: 'Sulfite'
    },
    {
      id: 10,
      label: 'Tree Nut',
      checked: false,
      key: 'Tree Nut'
    },
    {
      index: 11,
      label: 'Wheat',
      checked: false,
      key: 'Wheat'
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
            title={item.label}
            checked={item.isCheck || false}
            onPress={(value) => onValueChange(item, index)}
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
