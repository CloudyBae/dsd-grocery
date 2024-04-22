import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import {
  Title,
  Body,
  Caption,
} from './Typography';

export default AddRecipeBar = (props) => {
  const {
    image = 'https://iambaker.net/wp-content/uploads/2020/03/sourdough-bread-4-768x644.jpg',
    name = 'A Simple Sourdough Starter Recipe',
    numMinutes = '1440',
    numIngredients = '2',
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
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

        <Body>
          {numIngredients + ' '}
          ingredients
        </Body>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 180,
  },
  firstSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tagImg: {
    height: 40,
    width: 120,
    borderRadius: 9,
  },
  productImg: {
    height: 110,
    width: 100,
    borderRadius: 4,
  },
  textSection: {
    flex: 1,
    paddingLeft: 1,
  },
  timerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timerImg: {
    height: 18,
    width: 18,
  },
});
