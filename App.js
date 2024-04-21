import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { IngredientScreen } from './screens/Ingredient';
import { RecipeScreen } from './screens/Recipe';
import { Filter } from './screens/Filter';
import { ShoppingListScreen } from './screens/ShoppingList';
import { LoginScreen } from './screens/Login';
import { SignUpScreen } from './screens/SignUp';
import { DietaryAllergenFilterScreen } from './screens/DietaryAllergenFilter';
import { AcctSavedRecipesScreen } from './screens/AcctSavedRecipes';
import { AccountSettingsMenu } from './screens/AccountSettingsMenu';
import { AccountDetailsScreen } from './screens/AccountDetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signup'
          component={SignUpScreen}
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
          name='Shopping List'
          component={ShoppingListScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Account'
          component={AccountSettingsMenu}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Dietary Preferences & Allergies'
          component={DietaryAllergenFilterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Account Details'
          component={AccountDetailsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Saved Recipes'
          component={AcctSavedRecipesScreen}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name='Recipe'
          component={RecipeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Filter'
          component={Filter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
