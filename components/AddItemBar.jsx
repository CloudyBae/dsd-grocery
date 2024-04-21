import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export const AddItemBar = () => {
  const [num, setNum] = useState(0);
  const [ingredientListData, setIngredientListData] = useState([]);

  const subNum = () => {
    setNum(num - 1);
  };
  const addNum = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    const fetchIngredientListData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
        const response = await fetch(
          'http://localhost:3030/getIngredients',
          requestOptions
        );
        const data = await response.json();
        setIngredientListData(data);
      } catch (error) {
        console.log('Error fetching ingredient list data: ', error);
      }
    };

    fetchIngredientListData();
  }, []);

  return (
    <View style={styles.container}>
      {ingredientListData.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.firstSection}>
            {/* <Image
              source={require('../assets/IngredientTag.png')}
              style={styles.tagImg}
              resizeMode='cover'
            /> */}
            <Image
              source={{ uri: item.image || 'https://placeholder.pics/svg/300/DEDEDE/555555/placeholder' }}
              style={styles.productImg}
              resizeMode='cover'
            />
          </View>
          <View style={styles.textSection}>
            <Text style={styles.headingText}>{item.name}</Text>
            <Text style={styles.amountText}>{item.quantity} quantity</Text>
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
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  firstSection: {
    flexDirection: 'column',
    alignItems: 'center',
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
    fontSize: 11,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 10,
    paddingTop: 4,
    paddingBottom: 8,
  },
  quantityBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtractButton: {
    backgroundColor: '#ffffff',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  addButton: {
    backgroundColor: '#ffffff',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


