import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import MainButton from './components/MainButton';
import Macro from './components/Macro';
import Hero from "./components/Hero";
import HeroBanner from './assets/hero.png'; 
import CategoryButton from './components/CategoryButton';
import RecipeCard from './components/RecipeCard';
import {
  Body,
  BodySmall,
  ButtonLarge,
  Caption,
  Title,
} from './components/Typography';
import ThirdPartySignIn from './components/ThirdPartySignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Hero image = {HeroBanner}/>
      {/* <Button
        id='add_to_basket_btn'
        isFullWidth={true}
        startEnhancer={<Text>✔️</Text>}
        endEnhancer={<Text>$12.96</Text>}
      >
        Add to the Basket
      </Button>
      <MainButton />
      <Macro macro={'Protein'} percentage={50} goal={100} />
      <CategoryButton
        title={'Plan Meal'}
        onPress={() => console.log('Plan meal')}
      />
      <RecipeCard
        title='Banana Pie'
        image={
          'https://assets.epicurious.com/photos/64dce3fb0581466b0dc4c9ea/1:1/w_2560%2Cc_limit/Banana-Cream-Pie_Recipe_2023-08-10_1221.jpg'
        }
        minutes={30}
        rating={4.7}
      />
      <Title>Enter your 4-digit code</Title>
      <Body>
        Swithch on your location to stay in tune with what’s happening in your
        area
      </Body>
      <Caption>
        By continuing you agree to our Terms of Service and Privacy Policy.
      </Caption>
      <ButtonLarge>Organic Bananas</ButtonLarge>
      <BodySmall
        style={{
          color: '#52B175',
        }}
      >
        Apples are nutritious. Apples may be good for weight loss. apples may be
        good for your heart. As part of a healtful and varied diet.
      </BodySmall>
      <ThirdPartySignIn
        title='Facebook'
        icon='facebook'
        textColor='white'
        iconColor='white'
        backgroundColor='blue'
        onPress={() => console.log('Facebook')}
      />
      <ThirdPartySignIn
        title='Google'
        textColor='gray'
        icon='google'
        iconColor='black'
        backgroundColor='white'
        onPress={() => console.log('Google')}
      />
      <ThirdPartySignIn
        title='Apple'
        icon='apple'
        textColor='white'
        iconColor='white'
        backgroundColor='black'
        onPress={() => console.log('Apple')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
