import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default AddItemBar = (props) => {
  const [num, setNum] = useState(0);

  const subNum = () => {
    setNum((num = num - 1));
  };
  const addNum = () => {
    setNum((num = num + 1));
  };

  const {
    onPress,
    subtractbtn = '-',
    addbtn = '+',
    image = 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/Butter-Main-Pic.jpg?quality=82&strip=1&w=640',
    name = 'Organic Bananas',
    qty = '5',
    unit = 'pcs',
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <Image
          source={require('../assets/IngredientTag.png')}
          style={styles.tagImg}
          resizeMode='cover'
        />
        <Image
          source={{ uri: image || '' }}
          style={styles.productImg}
          resizeMode='cover'
        />
      </View>
      <View style={styles.textSection}>
        <Text style={styles.headingText}>{name}</Text>
        <Text style={styles.amountText}>
          {qty}
          {unit}
        </Text>
        <View style={styles.quantityBtnContainer}>
          <Pressable
            onPress={() => console.log('Button Pressed')}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.subtractButton,
            ]}
          >
            <Text style={styles.buttonText}>{subtractbtn}</Text>
          </Pressable>
          <Text>{num}</Text>
          <Pressable
            onPress={() => console.log('Button Pressed')}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.addButton,
            ]}
          >
            <Text style={styles.buttonText}>{addbtn}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    height: 160,
    width: 364,
  },
  firstSection: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 5,
  },
  tagImg: {
    height: 30,
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
    paddingLeft: 2,
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
