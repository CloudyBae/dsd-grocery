import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { ButtonLarge } from './Typography';

export default IngredientCard = ({ ingredient }) => {
  const { id, name, image } = ingredient;

  return (
    <View style={styles.container} id={id}>
      <Image
        source={{ uri: image || '' }}
        style={styles.productImg}
        resizeMode='cover'
      />
      <ButtonLarge>{name}</ButtonLarge>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e7e7e7',
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
    gap: 10,
    width: '48%',
    backgroundColor: '#fff',
  },
  productImg: {
    height: 110,
    width: 100,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 5,
  },
});
