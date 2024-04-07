import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default AddProductCard = (props) => {
  const { onPress, title = '+', image = 'https://m.media-amazon.com/images/I/61fZ+YAYGaL._SL1500_.jpg', name = 'Organic Bananas', qty = '5', unit = 'pcs', price = '4.99'} = props;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: image || '' }}
          style={styles.productImg}
        />

        <Text style={styles.headingText}>{name}</Text>
        <Text style={styles.amountText}>{qty}{unit}</Text>

        <View style={styles.bottomCard}>
        <Text style={styles.priceText}>${price}</Text>
          <Pressable style={styles.addButton} onPress={props.onPress}>
            <Text style={styles.buttonText}>{title}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    borderRadius: 5,
    height: 248,
    width: 173,
    top: 0,
    left: 0,
  },
  productImg: {
    paddingHorizontal: 60,
    height: 110,
    width: 80,
  },
  headingText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 10,
    paddingTop: 4,
  },
  priceText: {
    fontSize: 12,
    paddingTop: 4,
    fontWeight: 'bold'
  },
  addButton: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53b175',
    borderColor: '#e7e7e7',
    borderRadius: 5,
    height: 50,
    width: 50,
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  bottomCard: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },
});
