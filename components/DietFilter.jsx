import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SPOONACULAR_API_KEY } from '@env';
import { BodySmall } from './Typography';

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
    <View style={{ marginRight: 10 }}>
      <Pressable
        style={[
          styles.categoryButton,
          selectedCategory === item.id && styles.selectedCategory,
        ]}
        onPress={() => handleDietPrerefence(item)}
      >
        <BodySmall
          style={[
            styles.categoryText,
            selectedCategory === item.id && styles.selectedCategoryText,
          ]}
        >
          {item.category}
        </BodySmall>
      </Pressable>
    </View>
  );

  return (
    <View style={{ gap: 10 }}>
      <FlatList horizontal data={categories} renderItem={renderItem} />
    </View>
  );
};

export default DietFilter;

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  categoryButton: {
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  categoryText: {
    color: '#000',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },
  selectedCategory: {
    backgroundColor: '#52B175',
  },
  selectedCategoryText: {
    color: '#fff',
  },
});
