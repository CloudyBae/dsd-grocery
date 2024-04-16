import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';

export default function AllergenFilters() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      label: 'Dairy',
      checked: false,
    },
    {
      id: 1,
      label: 'Egg',
      checked: false,
    },
    {
      id: 2,
      label: 'Gluten',
      checked: false,
    },
    {
      id: 3,
      label: 'Grain',
      checked: false,
    },
    {
      id: 4,
      label: 'Peanut',
      checked: false,
    },
    {
      id: 5,
      label: 'Seafood',
      checked: false,
    },
    {
      id: 6,
      label: 'Sesame',
      checked: false,
    },
    {
      id: 7,
      label: 'Shellfish',
      checked: false,
    },
    {
      id: 8,
      label: 'Soy',
      checked: false,
    },
    {
      id: 9,
      label: 'Sulfite',
      checked: false,
    },
    {
      id: 10,
      label: 'Tree Nut',
      checked: false,
    },
    {
      id: 11,
      label: 'Wheat',
      checked: false,
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
            onPress={(val) => onValueChange(item, index)}
            key={item.name}
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
