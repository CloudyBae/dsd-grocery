import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { IngredientScreen } from './screens/Ingredient';
import { RecipeScreen } from './screens/Recipe';
import { FilterScreen } from './screens/Filter';
import { ShoppingListScreen } from './screens/ShoppingList';
import { LoginScreen } from './screens/Login';
import { SignUpScreen } from './screens/SignUp';
import { AccountSettingsMenu } from './screens/AccountSettingsMenu';
import { AccountDetailsScreen } from './screens/AccountDetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ingredient'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
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
          name='Filter'
          component={FilterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ShoppingList'
          component={ShoppingListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AccountSettingsMenu'
          component={AccountSettingsMenu}
          options={{ headerShown: false }}
        />
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
          name='AccountDetailsScreen'
          component={AccountDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
