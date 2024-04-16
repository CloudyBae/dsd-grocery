import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default AddRecipeBar = (props) => {
  const {
    onPress,
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
        <Text style={styles.headingText} numberOfLines={null}>
          {name}
        </Text>
        <View style={styles.timerView}>
          <Image
            source={require('../assets/timerImg.png')}
            style={styles.timerImg}
            resizeMode='cover'
          />
          <Text style={styles.amountText}>
            {' ' + numMinutes + ' '}
            minutes
          </Text>
        </View>

        <Text>
          {numIngredients + ' '}
          ingredients
        </Text>
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
    paddingLeft: 5,
  },
  tagImg: {
    height: 40,
    width: 120,
    borderRadius: 10,
    marginBottom: 2,
  },
  productImg: {
    height: 110,
    width: 100,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 5,
  },
  textSection: {
    flex: 1,
    paddingLeft: 1,
  },
  headingText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  timerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 4,
  },
  timerImg: {
    height: 18,
    width: 18,
  },
  amountText: {
    fontSize: 10,

    paddingBottom: 4,
  },
});
