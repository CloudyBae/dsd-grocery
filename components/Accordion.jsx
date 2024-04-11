import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const list = [
    {
      title: 'Product Details',
      details: 'Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a heartful and varied diet.',
    },
    {
      title: 'Nutritions',
      details: 'Calories 94.6. Water 156 grams. Protein 0.43 grams. Carbs 25.1 grams. Sugar 18.9 grams. Fiber 4.37 grams. Fat 0.3 grams.',
    },
    {
      title: 'Review',
      details: 'Truly, spectacularly delicious!',
    },
  ];

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        {list.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity style={styles.cardHeader} onPress={() => toggleAccordion(index)}>
              <Text style={styles.cardHeader}>{item.title}</Text>
              <AntDesign
                name={activeIndex === index ? 'up' : 'down'}
                size={20}
                color='black'
              />
            </TouchableOpacity>
            {activeIndex === index && (
              <View style={styles.cardContent}>
                <Text style = {styles.text}>{item.details}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </>
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
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 5,
  },
  arrowContent: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text:{
    fontSize: 16,

  }
});

export default Accordion;
