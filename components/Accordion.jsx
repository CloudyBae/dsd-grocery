import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Body, BodySmall } from './Typography';

const Accordion = ({
  listItem = [
    {
      title,
      details,
    },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={styles.accordionContainer}>
      <StatusBar />
      <View style={styles.container}>
        {listItem.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity
              style={styles.cardHeader}
              onPress={() => toggleAccordion(index)}
            >
              <Body style={{ color: '#181725' }}>{item.title}</Body>
              <AntDesign
                name={activeIndex === index ? 'up' : 'down'}
                size={18}
                color='#121212'
              />
            </TouchableOpacity>
            {activeIndex === index && (
              <View style={styles.cardContent}>
                <BodySmall>{item.details}</BodySmall>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2B2',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  text: {
    fontSize: 16,
  },
});

export default Accordion;
