import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native-web';

const Accordion = () => {
  const [expanded, setExpanded] = useState([]);

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

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <ScrollView>
      {list.map((item, index) => (
        <ListItem.Accordion
          key={index}
          content={
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded[index]}
          onPress={() => toggleAccordion(index)}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                {item.details}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default Accordion;
