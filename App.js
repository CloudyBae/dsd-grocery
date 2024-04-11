import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './routes/Home';
import { SplashScreen } from './routes/Splash';
import { IngredientScreen } from './routes/Ingredient';
import { RecipeScreen } from './routes/Recipe';
import { FilterScreen } from './routes/Search';
import { CartScreen } from './routes/Cart';
import { SettingsScreen } from './routes/Settings';
import { LoginScreen } from './routes/Login';
import { SignUpScreen } from './routes/SignUp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Splash'
          component={SplashScreen}
          options={{ headerTitle: 'Home' }}
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
