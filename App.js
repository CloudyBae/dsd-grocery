import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { SplashScreen } from './screens/Splash';
import { IngredientScreen } from './screens/Ingredient';
import { RecipeScreen } from './screens/Recipe';
import { FilterScreen } from './screens/Filter';
import { ShoppingListScreen } from './screens/ShoppingList';
import { SettingsScreen } from './screens/Settings';
import { LoginScreen } from './screens/Login';
import { SignUpScreen } from './screens/SignUp';
import { DietaryAllergenFilterScreen } from './screens/DietaryAllergenFilter';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name='Splash'
          component={SplashScreen}
          options={{ headerShown: false }}
        />
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
          name='Settings'
          component={SettingsScreen}
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
          name='DietaryAllergenFilter'
          component={DietaryAllergenFilterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
