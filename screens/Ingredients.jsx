import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import IngredientCard from '../components/IngredientCard';
import Nav from '../components/Nav';
import Search from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { Body } from '../components/Typography';
import Button from '../components/Button';
import { FontAwesome5 } from '@expo/vector-icons';
import { AddIngredientModal } from './AddIngredient';
import { USER_API_IP_URL } from '@env';

export const IngredientScreen = () => {
  const userId = '1'; // update later when backend working
  const [modalVisible, setModalVisible] = useState(false);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIngredients = async () => {
    try {
      const response = await fetch(
        `http://${USER_API_IP_URL}:8000/api/users/1/ingredients/`
      );
      const data = await response.json();
      console.log(data);
      setIngredients(data);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, [userId]);

  const updateSearch = (query) => {
    setSearch(query);

    const filteredResults = ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {modalVisible && (
          <>
            <AddIngredientModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              fetchIngredients={fetchIngredients}
            />
          </>
        )}

        <Search updateSearch={updateSearch} value={search} />
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color='#52B175' />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.ingredientsContainer}>
              {searchResults.length > 0 ? (
                searchResults.map((ingredient) => (
                  <IngredientCard key={ingredient.id} ingredient={ingredient} />
                ))
              ) : (
                <View
                  style={{
                    flex: 1,
                    marginTop: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Body>No ingredients found</Body>
                </View>
              )}
            </View>
          </ScrollView>
        )}
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
            <View style={{ ...styles.rowContainer }}>
              <FontAwesome5
                name='plus'
                style={styles.icon}
                color='#fff'
                size={20}
              />
            </View>
          </Button>
        </View>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addIngredientButton: {
    position: 'absolute',
    bottom: '12%',
    right: '6%',
  },
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    width: '100%',
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
});
