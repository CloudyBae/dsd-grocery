import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import IngredientCard from '../components/IngredientCard';
import Nav from '../components/Nav';
import Search from '../components/SearchBar';
import { useState } from 'react';
import { BodySmall } from '../components/Typography';

const imageUrl =
  'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=WlQcb2Uh';

export const IngredientScreen = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [ingredientList] = useState([
    {
      id: 1,
      name: 'Banana chips',
      image: imageUrl,
    },
    {
      id: 2,
      name: 'Banana liqueur',
      image: imageUrl,
    },
    {
      id: 3,
      name: 'Apple',
      image: imageUrl,
    },
    {
      id: 4,
      name: 'Orange',
      image: imageUrl,
    },
    {
      id: 5,
      name: 'Lemon',
      image: imageUrl,
    },
    {
      id: 6,
      name: 'Strawberry',
      image: imageUrl,
    },
    {
      id: 7,
      name: 'Blueberry',
      image: imageUrl,
    },
    {
      id: 8,
      name: 'Grape',
      image: imageUrl,
    },
    {
      id: 9,
      name: 'Kiwi',
      image: imageUrl,
    },
    {
      id: 10,
      name: 'Watermelon',
      image: imageUrl,
    },
  ]);

  const updateSearch = (query) => {
    setSearch(query);

    const filteredResults = ingredientList.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search updateSearch={updateSearch} value={search} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.ingredientsContainer}>
          {searchResults.length > 0 ? (
            searchResults.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))
          ) : (
            <BodySmall>No results 😭</BodySmall>
          )}
        </View>
      </ScrollView>
      <Nav style={styles.navBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: '100%',
    flex: 1,
    display: 'flex',
    backgroundColor: '#FFF',
  },
  ingredientsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 0,
    flexWrap: 'wrap',
    paddingBottom: 80,
  },
});
