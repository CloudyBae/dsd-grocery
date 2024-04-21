import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

const ShoppingListItem = () => {
  const [shoppingListData, setShoppingListData] = useState([]);

  useEffect(() => {
    const fetchShoppingListData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
        const response = await fetch(
          'http://localhost:3030/getShoppingList',
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

  const highlightItem = (item) => {
    if (!item.is_purchased) {
      return { backgroundColor: `#e8c500` };
    }
    return {};
  };

  return (
    <View>
      {shoppingListData.map((item) => (
        <View key={item.id} style={[styles.container, highlightItem(item)]}>
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
              <Text style={styles.amountText}>{item.quantity} quantity</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 180,
    marginBottom: 10,
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

export default ShoppingListItem;
