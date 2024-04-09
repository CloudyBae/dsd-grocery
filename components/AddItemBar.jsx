import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export default AddItemBar = (props) => {
    const {
        onPress,
        title = '+',
        image = 'https://m.media-amazon.com/images/I/61fZ+YAYGaL._SL1500_.jpg',
        name = 'Organic Bananas',
        qty = '5',
        unit = 'pcs',
        price = '4.99',
        delete = 'X',
      } = props;

  return (
    <View >
        <Image source={{ uri: image || '' }} style={styles.productImg} />
        <View>
            <Text style={styles.headingText}>{name}</Text>
            <Text style={styles.amountText}>{qty}{unit}</Text>
        </View>
        <View>
        <Image source={{ uri: delete || '' }} style={styles.deleteBtn} />
        <Text style={styles.priceText}>${price}</Text>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 96,
        width: 363,
    },
    productImg: {
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
        paddingBottom: 8,
      },
      priceText: {
        fontSize: 12,
        paddingTop: 4,
        fontWeight: 'bold',
      },
      deleteBtn: {
        height: 50,
        width: 50,
      } 
})