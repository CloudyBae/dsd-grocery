import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

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
    alignItems: 'center',
    borderRadius: 18,
    height: 210,
  },
  image: {
    height: 130,
    width: 130,
    minHeight: 130,
    minWidth: 130,
    maxHeight: 130,
    maxWidth: 130,
    borderRadius: 18,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 3,
  },
  ratingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 1,
  },
  cardTitle: {
    maxWidth: 150,
  },
});
