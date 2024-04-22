import * as React from 'react';
import { AccountDetailsScreen } from './screens/AccountDetailsScreen';
import { AccountSettingsMenu } from './screens/AccountSettingsMenu';
// import { AcctSavedRecipesScreen } from './screens/AcctSavedRecipesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DietaryAllergenFilter } from './screens/DietaryAllergenFilter';
import { Filter } from './screens/Filter';
import { HomeScreen } from './screens/Home';
import { IngredientScreen } from './screens/Ingredient';
import { LoginScreen } from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { RecipeScreen } from './screens/Recipe';
import { ShoppingListScreen } from './screens/ShoppingList';
import { SignUpScreen } from './screens/SignUp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Account Details'
          component={AccountDetailsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='AccountSettingsMenu'
          component={AccountSettingsMenu}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name='Saved Recipes'
          component={AcctSavedRecipesScreen}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name='Dietary Preferences & Allergies'
          component={DietaryAllergenFilter}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Filter'
          component={Filter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Ingredient'
          component={IngredientScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Recipe'
          component={RecipeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Shopping List'
          component={ShoppingListScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Signup'
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
