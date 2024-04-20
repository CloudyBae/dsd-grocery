import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';
import { Body, Title } from '../components/Typography';

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
      <Title>Allergies</Title>

      {categories.map((item, index) => {
        return (
          <CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            title={<Body color={'#181725'}>{item.label}</Body>}
            checked={item.isCheck || false}
            onPress={(val) => onValueChange(item, index)}
            key={item.id}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});
