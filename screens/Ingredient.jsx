import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import IngredientCard from '../components/IngredientCard';
import Nav from '../components/Nav';
import Search from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { BodySmall } from '../components/Typography';
import Button from '../components/Button';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AddIngredientModal } from './AddIngredient';

const imageUrl =
  'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=WlQcb2Uh';

export const IngredientScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const ingredientList = [
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
  ];


const fetchIngredients = async () => {
  try {
    const response = await fetch(  `http://localhost:8000/user/${userId}/ingredients/`,);
    const data = await response.json();
    setIngredients(data);
  } catch (error) {
    console.error('Error fetching ingredients:', error);
  }
}

useEffect(() => {
  fetchIngredients()
},[fetchIngredients])

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
          {/* {searchResults.length > 0 ? (
            ingredientList.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))
          ) : (
            <BodySmall>No results 😭</BodySmall>
          )} */}
          {ingredientList.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
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
          <View style={styles.rowContainer}>
            <FontAwesome5
              name='plus'
              style={styles.icon}
              color='#fff'
              size={26}
            />
          </View>
        </Button>
      </View>
      <Nav style={styles.navBar} />
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
});
