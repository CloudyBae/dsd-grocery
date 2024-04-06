import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';

const RecipeCard = ({title, image, minutes, rating}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image style={styles.image} source={{uri: image || ''}}/>
      </View>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardSubTitle}>{minutes || '0'} mins</Text>
        <Text>|</Text>
        <View style={styles.ratingDetails}>
          <Text>{rating || '0.0'}</Text>
          <Entypo name="star" size={20} color="red" />
        </View>
      </View>
    </View>
  )
}

export default RecipeCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#52B175',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    gap: 3
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 15
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3
  },
  ratingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1
  },
  cardTitle: {
    fontSize: 18
  },
  cardSubTitle: {
    fontSize: 14
  },
});