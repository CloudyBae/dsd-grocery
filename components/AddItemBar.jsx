import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import {
  Title,
  Body,
} from './Typography';

const AddItemBar = () => {
  const [num, setNum] = useState(0);

  const subNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
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
      quantity: `Quantity: ${num}`,
      user: 'texasrecordingsunderground@gmail.com',
      preference: '1',
    },
    {
      id: 2,
      name: 'GreenBellPepper',
      image:
        'https://m.media-amazon.com/images/I/41ultdsxF8L._SY300_SX300_QL70_FMwebp_.jpg',
      quantity: `Quantity: ${num}`,
      user: 'e1254690@student.dcccd.edu',
      preference: '1',
    },
    {
      id: 3,
      name: 'Beef',
      image:
        'https://m.media-amazon.com/images/I/517+FWG43-L._SX300_SY300_.jpg',
      quantity: `Quantity: ${num}`,
      user: 'e1254690@student.dcccd.edu',
      preference: '1',
    },
    {
      id: 4,
      name: 'Apples',
      image:
        'https://m.media-amazon.com/images/I/413SS6wy+cL._SY300_SX300_.jpg',
      quantity: `Quantity: ${num}`,
      user: 'texasrecordingsunderground@gmail.com',
      preference: '2',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
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
        <Title>{data[0].name}</Title>
        <Body>{data[0].quantity}</Body>
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
            <Body>-</Body>
          </Pressable>
          <Body style={{ color: '#121212' }}>{num}</Body>
          <Pressable
            onPress={addNum}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.addButton,
            ]}
          >
            <Body>+</Body>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#c2c2c2',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
  },
  imageSection: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 8,
  },
  tagImg: {
    borderRadius: 4,
    height: 40,
    width: 120,
  },
  productImg: {
    borderRadius: 4,
    height: 110,
    width: 100,
  },
  textSection: {
    flex: 1,
    flexDirection: 'col',
    gap: 8,
  },
  quantityBtnContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    height: 48,
    flex: 1,
    paddingBottom: 0,
    marginBottom: 0,
  },
  subtractButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#c2c2c2',
    borderRadius: 9,
    borderWidth: 1,
    color: '#121212',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#c2c2c2',
    borderRadius: 9,
    borderWidth: 1,
    color: '#121212',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
});

export default AddItemBar;
