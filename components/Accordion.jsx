import { useState } from 'react';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Accordion = () => {
  const [isProductDetails, setIsProductDetails] = React.useState(false)
  const [isNutritions, setIsNutritions] = React.useState(false)
  const [isReview, setIsReview] = React.useState(false)

  const list = [
    {
      title: 'Product Details',
      details:
        'Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a heartful and varied diet.',
    },
    {
      title: 'Nutritions',
      details:
        'Calories 94.6. Water 156 grams. Protein 0.43 grams. Carbs 25.1 grams. Sugar 18.9 grams. Fiber 4.37 grams. Fat 0.3 grams.',
    },
    {
      title: 'Review',
      details: 'Truly, spectacularly delicious!',
    },
  ];

  const toggleProductDetails = () =>{
    setIsProductDetails(!isProductDetails);
  };

  const toggleNutritions = ()=>{
    setIsNutritions(!isNutritions);
  };

  const toggleReview = ()=>{
    setIsReview(!isReview)
  }


  return (
<View style={styles.container}>
      <StatusBar />
      {list.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={toggleProductDetails}
        >
          <Text style={styles.cardHeader}>{item.title}</Text>
          <View style={styles.arrowContent}>
            <AntDesign
              name={isProductDetails ? 'up' : 'down'}
              size={20}
              color='black'
            />
          </View>
          {isProductDetails && (
            <View style={styles.cardContent}>
              <Text style={styles.text}>{item.details}</Text>
            </View>
          )}
        </TouchableOpacity>

        
      ))}
    </View>
  );
};
  


const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: 364,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 13,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    fontSize: 18,
  },
  cardContent: {
    padding: 5,
  },
  arrowContent: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Accordion;
