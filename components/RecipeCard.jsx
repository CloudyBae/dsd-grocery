import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const RecipeCard = ({ title, image, minutes, rating }) => {
  const placeholderImage = require('../assets/noImagePlaceholder.png');
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          style={styles.image}
          source={image ? { uri: image } : placeholderImage}
        />
      </View>
      <View>
        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail'>
          {title}
        </Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardSubTitle}>{minutes || '0'} mins</Text>
        <Text>|</Text>
        <View style={styles.ratingDetails}>
          <Text>{rating || '0.0'}</Text>
          <Entypo name='heart' size={20} color='red' />
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#52B175',
    padding: 10,
    marginRight: 5,
    alignItems: 'center',
    borderRadius: 15,
    height: 210,
  },
  image: {
    height: 130,
    width: 130,
    minHeight: 130,
    minWidth: 130,
    maxHeight: 130,
    maxWidth: 130,
    borderRadius: 15,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    maxWidth: 150,
    marginTop: 5,
  },
  cardSubTitle: {
    fontSize: 14,
  },
});
