import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { Title } from '../components/Typography/index.js';

export const ShoppingListScreen = () => {
  const items = [
    {
      image:
        'https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/Butter-Main-Pic.jpg?quality=82&strip=1&w=640',
      name: 'Organic Bananas',
      qty: '3',
      unit: 'pcs',
    },
    {
      image:
        'https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/bleached-white-flour.jpg?quality=82&strip=1&w=640',
      name: 'Flour',
      qty: '1',
      unit: 'kg',
    },
    {
      image:
        'https://www.eatthis.com/wp-content/uploads/sites/4/2022/03/sourdough-bread.jpg?quality=82&strip=1&w=640',
      name: 'Bread',
      qty: '1',
      unit: 'loaf',
    },
    {
      image:
        'https://www.eatthis.com/wp-content/uploads/sites/4/2023/01/blueberries.jpg?quality=82&strip=1&w=640',
      name: 'Blueberries',
      qty: '1',
      unit: 'container',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Title
            style={{
              color: 'black',
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingTop: 40,
              paddingBottom: 20,
            }}
          >
            Shopping List
          </Title>
          <ShoppingListItem items={items} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
