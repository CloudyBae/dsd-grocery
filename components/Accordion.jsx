import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Animated } from 'react-native';

const Accordion = () => {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: 'Product Details',
      details:
        'Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a heartful and varied diet.',
      showContent: false,
    },
    {
      id: 2,
      title: 'Nutritions',
      details:
        'Calories: 94.6. Water: 156 grams. Protein: 0.43 grams. Carbs: 25.1 grams. Sugar: 18.9 grams. Fiber: 4.37 grams. Fat: 0.3 grams.',
      showContent: false,
    },
    {
      id: 3,
      title: 'Review',
      details: 'Truly, spectacularly delicious!',
      showContent: false,
    },
  ]);

  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = (index) => {
    const newAccordion = [...accordion];
    newAccordion[index].showContent = !newAccordion[index].showContent;
    setAccordion(newAccordion);
    animatedAccordion(index);
  };

  const animatedAccordion = (index) => {
    const config = {
      duration: 300,
      toValue: accordion[index].showContent ? 1 : 0,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  const plusMinusToggle = (index) => {
    return accordion[index].showContent ? '-' : '+';
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.container}>
      {accordion.map((item, index) => (
        <TouchableOpacity key={item.id} onPress={() => toggleListItem(index)}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.arrow}> {plusMinusToggle(index)} </Text>
            {accordion[index].showContent && (
              <Animated.View
                style={{ transform: [{ rotateZ: arrowTransform }] }}
              ></Animated.View>
            )}
            {accordion[index].showContent && (
              <View style={styles.content}>
                <Text>{item.details}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'left',
    margin: 20,
    width: 364,
    height: 67,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
  content: {
    paddingLeft: 20,
  },
});

export default Accordion;
