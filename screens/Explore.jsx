import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Search from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import { SPOONACULAR_API_KEY } from '@env';
import { SectionTitle } from '../components/Typography';
import Nav from '../components/Nav';

export const ExploreScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Electronics',
    'Books',
    'Clothing',
    'Sports',
    'Toys',
    'Food',
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = categories.filter((category) =>
      category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        ` https://api.spoonacular.com/food/products/search?query=pizza&number=2&apiKey=${SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      console.log('data.recipes: ', data);
      setRecipes(data.recipes);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    //fetchRecipes();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100vh' }}>
      <View style={styles.categoryContainer}>
        <ScrollView style={{ width: '100%', padding: '25px' }}>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '25px' }}>
            Find Products
          </SectionTitle>
          <View style={styles.containerSearchbar}>
            <FontAwesome5
              name='search'
              size={16}
              color='#181B19'
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder='Search store'
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.searchTextInput}
            />
          </View>
          {recipes && (
            <View style={styles.categoryGrid}>
              <CategoryCard
                id='category-card-dairy-eggs'
                title='Dairy & Eggs'
                image='https://www.sunfreshfl.com/wp-content/uploads/2023/05/milk-and-eggs-580h-2.png'
              />
              <CategoryCard
                id='category-card-dairy-eggs'
                title='Dairy & Eggs'
                image='https://www.sunfreshfl.com/wp-content/uploads/2023/05/milk-and-eggs-580h-2.png'
              />
            </View>
          )}
        </ScrollView>
      </View>
      <View></View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  containerSearchbar: {
    display: 'flex',
    width: ' 100%',
    flexDirection: 'row',
    padding: '14px',
    marginBottom: '10px',
    borderRadius: '10px',
    backgroundColor: '#F2F3F2',
  },
  searchTextInput: {
    fontSize: 14,
    width: ' 100%',
    lineHeight: 21,
    fontFamily: 'Gilroy-Medium',
    fontWeight: '600',
    letterSpacing: 0.25,
    color: '##7C7C7C',
    backgroundColor: '#F2F3F2',
  },
  categoryGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
