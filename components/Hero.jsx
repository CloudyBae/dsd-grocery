import { StyleSheet, View, Image } from 'react-native';

const Hero = ({ image }) => {
  return (
    <View>
      <Image source={image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default Hero;
