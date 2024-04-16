import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import AddRecipeBar from '../components/AddRecipeBar';

export const RecipeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <AddRecipeBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
