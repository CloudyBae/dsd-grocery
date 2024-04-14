import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';
import { SPOONACULAR_API_KEY } from '@env';


export default function DietaryFilters() {

  const [categories, setCategories] = useState([
    {
      id:0,
      label:'Vegetarian',
      checked: false
    },
    {
      id:1,
      label:'Vegan',
      checked: false
    },
    {
      id:2,
      label:'Paleo',
      checked: false
    },
    {
      id:3,
      label:'High-Fiber',
      checked: false
    },
    {
      id:4,
      label:'High-Protein',
      checked: false
    },
    {
      id:5,
      label:'Low-Carb',
      checked: false
    },
    {
      id:6,
      label:'Low-Fat',
      checked: false
    },
    {
      id:7,
      label:'Low-Sodium',
      checked: false
    },
    {
      id:8,
      label:'Low-Sugar',
      checked: false
    },
    {
      id:9,
      label:'Alcohol-Free',
      checked: false
    },
    {
      id:10,
      label:'Balanced',
      checked: false
    },
    {
      id:11,
      label:'Immunity',
      checked: false
    }
  ]);

  const onValueChange = (item, index) => {
    const newCategory = [...categories];
    newCategory[index].isCheck = !item.isCheck;
    setCategories(newCategory);
  }

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Dietary Requirements</Text>

          {categories.map((item, index) => {
            return <CheckBox
              // Use ThemeProvider to change the defaults of the checkbox
              checkedColor='#52B175'
              title={item.label}
              checked={item.isCheck || false}
              onPress={(val) => onValueChange(item, index)}
              key={item.name}
            />
          })}
        </View>
      )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'rgb(240,240,240)'
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
  },
})