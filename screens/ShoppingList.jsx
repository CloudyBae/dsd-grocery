import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { Title } from '../components/Typography/index.js';
import Nav from '../components/Nav';

export const ShoppingListScreen = () => {
  const route = useRoute();
  const { id } = route.params;

  const [shoppingListData, setShoppingListData] = useState([]);

  useEffect(() => {
    const fetchShoppingListData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
        const response = await fetch(
          'http://localhost:8000/api/${recipe_id}/shoppingList/1',
          requestOptions
        );
        const data = await response.json();
        setShoppingListData(data);
      } catch (error) {
        console.log('Error fetching shopping list data: ', error);
      }
    };

    fetchShoppingListData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          {/* <Title style={styles.title}>Shopping List</Title> */}

          {shoppingListData.map((item) => (
            <View key={item.recipe_id} style={styles.rowContainer}>
              <View style={styles.firstSection}>
                <Image
                  source={{ uri: item.image || '' }}
                  style={styles.productImg}
                  resizeMode='cover'
                />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.headingText}>{item.name}</Text>
                <View style={styles.amountContainer}>
                  <Text style={styles.amountText}>{item.qty} quantity</Text>
                </View>
              </View>
            </View>
          ))}

          <ShoppingListItem items={items} />
        </View>
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 180,
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  title: {
    color: '#121212',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  firstSection: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 5,
  },
  tagImg: {
    height: 40,
    width: 120,
    borderRadius: 10,
    marginBottom: 2,
  },
  productImg: {
    height: 110,
    width: 100,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 5,
  },
  textSection: {
    flex: 1,
    paddingLeft: 10,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingTop: 10,
    paddingBottom: 8,
  },
  amountText: {
    fontSize: 20,
  },
  unitText: {
    fontSize: 20,
    marginLeft: 4,
  },
});
