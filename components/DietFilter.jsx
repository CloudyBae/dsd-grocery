import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SPOONACULAR_API_KEY } from '@env';

const DietFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    {
      id: '01',
      category: 'Vegetarian',
    },
    {
      id: '02',
      category: 'Vegan',
    },
    {
      id: '03',
      category: 'Gluten Free',
    },
    {
      id: '04',
      category: 'Ketogenic',
    },
    {
      id: '05',
      category: 'Lacto-Vegetarian',
    },
    {
      id: '06',
      category: 'Ovo-Vegetarian',
    },
    {
      id: '07',
      category: 'Pescetarian',
    },
    {
      id: '08',
      category: 'Paleo',
    },
    {
      id: '09',
      category: 'Primal',
    },
    {
      id: '10',
      category: 'Low FODMAP',
    },
    {
      id: '11',
      category: 'Whole30',
    },
  ];

  const handleDietPrerefence = (item) => {
    setSelectedCategory(selectedCategory === item.id ? null : item.id);
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(item.category)}&apiKey=${SPOONACULAR_API_KEY}&number=1`;
    console.log(url);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response: ', data);
      })
      .catch((error) => {
        console.log('API Error: ', error);
      });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        selectedCategory === item.id && styles.selectedCategory,
      ]}
      onPress={() => handleDietPrerefence(item)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.id && styles.selectedCategoryText,
        ]}
      >
        {item.category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={styles.titleText}>Diet Preference</Text>
      <FlatList horizontal data={categories} renderItem={renderItem} />
    </>
  );
};

export default DietFilter;

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 15,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#ccc',
  },
  categoryText: {
    fontSize: 18,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  selectedCategory: {
    backgroundColor: '#52B175',
  },
  selectedCategoryText: {
    color: '#fff',
  },
});