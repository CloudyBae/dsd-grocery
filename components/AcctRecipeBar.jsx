import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Title, Body, Caption } from './Typography';

export default AcctRecipeBar = (props) => {
  const {
    image = 'https://iambaker.net/wp-content/uploads/2020/03/sourdough-bread-4-768x644.jpg',
    name = 'A Simple Sourdough Starter Recipe',
    numMinutes = '1440',
    numIngredients = '2',
  } = props;

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Title style={{ marginLeft: 16 }}>Saved Recipes</Title>
      <View style={styles.container}>
        <View style={styles.imageSection}>
          <Image
            source={require('../assets/RecipeTag.png')}
            style={styles.tagImg}
            resizeMode='cover'
          />
          <Image
            source={{ uri: image || '' }}
            style={styles.productImg}
            resizeMode='cover'
          />
        </View>
        <View style={styles.textSection} numberOfLines={null}>
          <Title numberOfLines={null}>{name}</Title>
          <View style={styles.timerView}>
            <Image
              source={require('../assets/timerImg.png')}
              style={styles.timerImg}
              resizeMode='cover'
            />
            <Caption style={styles.amountText}>
              {' ' + numMinutes + ' '}
              minutes
            </Caption>
          </View>

          <Body>Ingredients: {numIngredients}</Body>
        </View>
        <View style={styles.removeImg}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Remove Button Pressed')}
          >
            <MaterialCommunityIcons name='close' size={48} color='red' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#c2c2c2',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
  },
  imageSection: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 8,
  },
  tagImg: {
    borderRadius: 4,
    height: 40,
    width: '100%',
  },
  productImg: {
    height: 110,
    width: 100,
    borderRadius: 4,
  },
  textSection: {
    flex: 1,
    gap: 6,
  },
  timerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerImg: {
    height: 16,
    width: 16,
  },
});
