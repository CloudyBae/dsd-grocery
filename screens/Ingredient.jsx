import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import IngredientCard from '../components/IngredientCard';
import Nav from '../components/Nav';
import Search from '../components/SearchBar';
import { useContext, useEffect, useState } from 'react';
import { BodySmall } from '../components/Typography';
import Button from '../components/Button';
import { FontAwesome5 } from '@expo/vector-icons';
import { AddIngredientModal } from './AddIngredient';

const imageUrl = 'https://cdn-icons-png.freepik.com/512/6981/6981367.png';

export const IngredientScreen = () => {
  const { userId } = '1'; // update later when backend working
  const [modalVisible, setModalVisible] = useState(false);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const ingredientList = [
    {
      id: 1,
      name: 'Banana chips',
      image: imageUrl,
      quantity: '200g',
      user: 123,
      preference: 1,
    },
    {
      id: 2,
      name: 'Lucuma',
      image: imageUrl,
      quantity: '100ml',
      user: 456,
      preference: 2,
    },
    {
      id: 3,
      name: 'Apple',
      image: imageUrl,
      quantity: '1',
      user: 789,
      preference: 1,
    },
    {
      id: 4,
      name: 'Orange',
      image: imageUrl,
      quantity: '2',
      user: 123,
      preference: 3,
    },
    {
      id: 5,
      name: 'Lemon',
      image: imageUrl,
      quantity: '1',
      user: 456,
      preference: 2,
    },
    {
      id: 6,
      name: 'Strawberry',
      image: imageUrl,
      quantity: '150g',
      user: 789,
      preference: 1,
    },
    {
      id: 7,
      name: 'Blueberry',
      image: imageUrl,
      quantity: '100g',
      user: 123,
      preference: 3,
    },
    {
      id: 8,
      name: 'Grape',
      image: imageUrl,
      quantity: '300g',
      user: 456,
      preference: 2,
    },
    {
      id: 9,
      name: 'Kiwi',
      image: imageUrl,
      quantity: '2',
      user: 789,
      preference: 1,
    },
    {
      id: 10,
      name: 'Watermelon',
      image: imageUrl,
      quantity: '1',
      user: 123,
      preference: 3,
    },
  ];

  useEffect(() => {
    const fetchIngredients = async () => {
      setIngredients(ingredientList);
    };
    fetchIngredients();
  }, []);

  const updateSearch = (query) => {
    setSearch(query);

    const filteredResults = ingredientList.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisible && (
        <>
          <AddIngredientModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </>
      )}

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
      <View style={styles.addIngredientButton}>
        <Button
          shape='rounded'
          style={{
            width: 65,
            height: 65,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setModalVisible(true)}
        >
          <View style={{ ...styles.rowContainer, marginTop: 5 }}>
            <FontAwesome5
              name='plus'
              style={styles.icon}
              color='#fff'
              size={26}
            />
          </View>
        </Button>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addIngredientButton: {
    position: 'absolute',
    bottom: '10%',
    right: 20,
  },
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredientsContainer: {
    backgroundColor: '#f2f2f2',
  },
});
