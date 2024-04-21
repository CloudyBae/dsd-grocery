import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

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
                color='black'
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
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
  },
  arrowContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
  },
});

export default Accordion;
