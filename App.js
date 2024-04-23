import * as React from 'react';
import { AccountDetailsScreen } from './screens/AccountDetailsScreen';
import { AccountSettingsMenu } from './screens/AccountSettingsMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilterScreen } from './screens/Filter';
import { HomeScreen } from './screens/Home';
import { IngredientScreen } from './screens/Ingredients';
import { LoginScreen } from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { RecipeScreen } from './screens/Recipe';
import { RecipeListScreen } from './screens/RecipeList';
import { ShoppingListScreen } from './screens/ShoppingList';
import DietaryAllergenFilterScreen from './screens/DietaryAllergenFilter';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Ingredients'
          component={IngredientScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Recipe'
          component={RecipeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='RecipeList'
          component={RecipeListScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Filter'
          component={FilterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Shopping List'
          component={ShoppingListScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Account Details'
          component={AccountDetailsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='DietaryAllergenFilterScreen'
          component={DietaryAllergenFilterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Account'
          component={AccountSettingsMenu}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name='Signup'
          component={SignUpScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
