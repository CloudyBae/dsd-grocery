import { useState, useRef } from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import { Animated } from 'react-native';

const Accordion = () => {

const [accordion, setAccordion] = useState([
  {id: 1, title: 'Product Details', details: 'Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a heartful and varied diet.', showContent: false},
  {id: 2, title: 'Nutrition', details: 'Calories: 94.6. Water: 156 grams. Protein: 0.43 grams. Carbs: 25.1 grams. Sugar: 18.9 grams. Fiber: 4.37 grams. Fat: 0.3 grams.', showContent: false},
  {id: 3, title: 'Review', details: 'Truly, spectacularly delicious!', showContent: false}
])  
const animationController = useRef(new Animated.Value(0)).current;

const toggleListItem = (index) =>{
  const newAccordion = [...accordion];
  newAccordion[index].showContent = !newAccordion[index].showContent;
  setAccordion(newAccordion);
  animatedAccordion(index)
};

const animatedAccordion=(index)=>{
  const config = {
  duration:300,
  toValue: accordion[index].showContent ? 1 : 0,
  useNativeDriver: true
}
Animated.timing(animationController, config).start();
};

const arrowTransform = animationController.interpolate({
  inputRange: [0,1],
  outputRange: ['0deg', '90deg']
})

  return (
    <View>
      {accordion.map((accordion, index)=>(
        <TouchableOpacity key = {accordion.id} onPress= {() =>toggleListItem(index)}>
            <View>
                <Text>{accordion.title}</Text>
                <Animated.View style={{ transform: [{ rotateZ: arrowTransform}] }}>
                <Text> > </Text>
                </Animated.View>
            </View>
        </TouchableOpacity>
      ))}
      {accordion.map((accordion, index)=>(
        accordion.showContent &&
        <View key={`content-${accordion.id}`}>
          <Text>{accordion.details}</Text>
        </View>
      ))}
    </View>
  )
}

export default Accordion