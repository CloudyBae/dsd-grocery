import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import {
  Title,
  Body,
  Caption,
  ButtonText,
} from './Typography';

export default AddProductCard = (props) => {
  const {
    onPress,
    title = '+',
    image = 'https://m.media-amazon.com/images/I/61fZ+YAYGaL._SL1500_.jpg',
    name = 'Organic Bananas',
    qty = '5',
    unit = 'pcs',
    price = '4.99',
  } = props;

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: image || '' }} style={styles.productImg} />

        <Title style={styles.headingText}>{name}</Title>
        <Body style={styles.amountText}>
          {qty}
          {unit}
        </Body>

        <View style={styles.bottomCard}>
          <Caption style={styles.priceText}>${price}</Caption>
          <Pressable
            onPress={() => console.log('Button Pressed')}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.addButton,
            ]}
          >
            <ButtonText>{title}</ButtonText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    borderRadius: 4,
    height: 248,
    width: 173,
    top: 0,
    left: 0,
  },
  productImg: {
    height: 110,
    width: 80,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53b175',
    borderColor: '#e7e7e7',
    borderRadius: 4,
    height: 50,
    width: 50,
  },
  buttonText: {
    color: '#ffffff',
  },
  bottomCard: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
