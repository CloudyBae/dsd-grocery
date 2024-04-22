import { Image, StyleSheet, View, Dimensions } from 'react-native';
import HeroBanner from '../assets/hero.png';

const Hero = ({ image }) => {
  const screenWidth = Dimensions.get('window').width;
  const aspectRatio = 4 / 3;
  const height = screenWidth / aspectRatio;

  return (
    <View style={styles.container}>
      <Image
        source={HeroBanner}
        style={{ width: screenWidth, height }}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hero;
