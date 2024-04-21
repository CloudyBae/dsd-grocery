import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

const AddItemBar = () => {
  const [num, setNum] = useState(0);

  const subNum = () => {
    setNum(num - 1);
  };
  const addNum = () => {
    setNum(num + 1);
  };

  const data = [
    {
      id: 1,
      name: 'Milk',
      image:
        'https://m.media-amazon.com/images/I/41uC0xBoZ3L._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: '1.00',
      user: 'texasrecordingsunderground@gmail.com',
      preference: '1',
    },
    {
      id: 2,
      name: 'GreenBellPepper',
      image:
        'https://m.media-amazon.com/images/I/41ultdsxF8L._SY300_SX300_QL70_FMwebp_.jpg',
      quantity: '1.00',
      user: 'e1254690@student.dcccd.edu',
      preference: '1',
    },
    {
      id: 3,
      name: 'Beef',
      image:
        'https://m.media-amazon.com/images/I/517+FWG43-L._SX300_SY300_.jpg',
      quantity: '1.00',
      user: 'e1254690@student.dcccd.edu',
      preference: '1',
    },
    {
      id: 4,
      name: 'Apples',
      image:
        'https://m.media-amazon.com/images/I/413SS6wy+cL._SY300_SX300_.jpg',
      quantity: '2.00',
      user: 'texasrecordingsunderground@gmail.com',
      preference: '2',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <Image
          source={require('../assets/IngredientTag.png')}
          style={styles.tagImg}
          resizeMode='cover'
        />
        <Image
          source={{ uri: data[0].image || '' }}
          style={styles.productImg}
          resizeMode='cover'
        />
      </View>
      <View style={styles.textSection}>
        <Text style={styles.headingText}>{data[0].name}</Text>
        <Text style={styles.amountText}>{data[0].quantity}</Text>
        <View style={styles.quantityBtnContainer}>
          <Pressable
            onPress={subNum}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.subtractButton,
            ]}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text>{num}</Text>
          <Pressable
            onPress={addNum}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.addButton,
            ]}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
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
    paddingLeft: 1,
  },
  headingText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 10,
    paddingTop: 4,
    paddingBottom: 8,
  },
  quantityBtnContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,
    width: 120,
  },
  subtractButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 50,
  },
});

export default AddItemBar;
