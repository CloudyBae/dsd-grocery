import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { SplashScreen } from './screens/Splash';
import { IngredientScreen } from './screens/Ingredient';
import { RecipeScreen } from './screens/Recipe';
import { FilterScreen } from './screens/Search';
import { CartScreen } from './screens/Cart';
import { SettingsScreen } from './screens/Settings';
import { LoginScreen } from './screens/Login';
import FlexColContainer from './components/FlexColContainer';
import { SignUpScreen } from './screens/SignUp';

const Stack = createNativeStackNavigator();
import Accordion from './components/Accordion';

function App() {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Hero />
        <Button
          id='add_to_basket_btn'
          isFullWidth={true}
          startEnhancer={<Text>✔️</Text>}
          endEnhancer={<Text>$12.96</Text>}
        >
          Add to the Basket
        </Button>
        <MainButton />
        <Macro macro={'Protein'} percentage={50} goal={100} />
        <SearchBar title={'Search Here'} />
        <Macro macro={'Protein'} percentage={50} goal={100} />
        <CategoryButton
          title={'Plan Meal'}
          onPress={() => console.log('Plan meal')}
        />

        <Stack.Screen
          name='Recipe'
          component={RecipeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Ingredient'
          component={IngredientScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Search'
          component={FilterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cart'
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <FlexContainer>
          <Text>Component 1</Text>
          <Text>Component 2</Text>
          <Text>Component 3</Text>
          <Text>Component 4</Text>
          <Text>Component 5</Text>
        </FlexContainer>
        <Nav />
        <Checkbox label='Vegetarian' isChecked={false} />
      </View>
    </ScrollView>
  );
}

export default App;
