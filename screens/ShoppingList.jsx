import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { Title } from '../components/Typography/index.js';
import Nav from '../components/Nav';

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
        'https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/bleached-#fff-flour.jpg?quality=82&strip=1&w=640',
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Title style={styles.title}>Shopping List</Title>
          <ShoppingListItem items={items} />
        </View>
      </ScrollView>
      <Nav style={styles.navBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  title: {
    color: '#121212',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
