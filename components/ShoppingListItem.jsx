import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ShoppingListItem = ({ items }) => {
  const [shoppingListItem, setShoppingListItem] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        user: 2,
        ingredient: {
          id: 6,
          name: 'Milk',
          image:
            'https://m.media-amazon.com/images/I/41uC0xBoZ3L._SX300_SY300_QL70_FMwebp_.jpg',
          quantity: '1.00',
          user: 2,
          preference: 1,
        },
        quantity: '5.00',
        is_purchased: false,
      },
      {
        id: 2,
        user: 2,
        ingredient: {
          id: 2,
          name: 'GreenBellPepper',
          image:
            'https://m.media-amazon.com/images/I/41ultdsxF8L._SY300_SX300_QL70_FMwebp_.jpg',
          quantity: '1.00',
          user: 2,
          preference: 1,
        },
        quantity: '2.00',
        is_purchased: false,
      },
      {
        id: 3,
        user: 2,
        ingredient: {
          id: 1,
          name: 'Apples',
          image:
            'https://m.media-amazon.com/images/I/413SS6wy+cL._SY300_SX300_.jpg',
          quantity: '1.00',
          user: 2,
          preference: 1,
        },
        quantity: '3.00',
        is_purchased: false,
      },
    ];

    const filteredItems = data.filter((item) => !item.is_purchased);

    filteredItems.forEach((item) => {
      item.quantity = parseInt(item.quantity);
    });
    setShoppingListItem(filteredItems);
  }, []);

  return (
    <View>
      {shoppingListItem.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.firstSection}>
            <Image
              source={{ uri: item.ingredient.image || '' }}
              style={styles.productImg}
              resizeMode='cover'
            />
          </View>
          <View style={styles.textSection}>
            <Text style={styles.headingText}>{item.ingredient.name}</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>{item.quantity}</Text>
              <Text style={styles.unitText}>quantity</Text>
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
