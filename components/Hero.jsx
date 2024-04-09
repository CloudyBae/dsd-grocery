import { Image, StyleSheet, View, Dimensions } from 'react-native';
import Hero from 'react-native-hero';


const myHero = ({ image }) => {
  const screenWidth = Dimensions.get('window').width;
  const aspectRatio = 4/3;
  const height = screenWidth/aspectRatio;

// render() {
//   return(
//     <Hero
//     source={image}
//     renderOverlay={()=>(
//       <View>
//         <Text>Itsa Hero!</Text>
//       </View>
//     )} />
//   )
// }

   return (
    <View style = {styles.container}>
       <Image source={image} style={{width: screenWidth, height}} resizeMode = "contain"/>
     </View>
   );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
});

export default myHero;

// import React from 'react';
// import { Text, View, StyleSheet, Dimensions } from 'react-native';
// import Hero from 'react-native-hero';

// const myHero = ({ image }) => {
//   const screenWidth = Dimensions.get('window').width;

//   return (
//     <Hero
//       source={image}
//       renderOverlay={() => (
//         <View>
//           <Text>Itsa Hero!</Text>
//         </View>
//       )}
//     />
//   );
// };

// export default Hero;
