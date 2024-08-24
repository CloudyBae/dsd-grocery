import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { USER_API_IP_URL } from '@env';

export const FilterScreen = () => {
  const [ingredientText, setIngredientText] = useState('');
  const navigation = useNavigation();
  const [selectedMealType, setSelectedMealTypes] = useState([]);
  const [plannedMealDay, setPlannedMealDay] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const mealTypes = ['Main Course', 'Breakfast', 'Dessert', 'Snack'];

  const handleMealTypeSelection = (meal) => {
    setSelectedMealTypes(meal);
  };

  const handleDayPressed = (day) => {
    setSelectedDate(day.dateString);
    setPlannedMealDay(day.dateString);
  };

  const handleRecipeSubmit = async () => {
    const data = {
      ingredient: ingredientText,
      mealType: selectedMealType,
      plannedDay: plannedMealDay,
    };

    try {
      const response = await fetch(`http://${USER_API_IP_URL}:8000/api/recipes/find_recipes/1/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
  
      const responseData = await response.json();
      console.log('Filter Screen:', responseData);
  
      navigation.navigate('RecipeList', { recipeData: responseData });
    } catch (error) {
      console.error('Error submitting data:', error.message);
    }
  };

  return (
    <>
      <Header pageTitle='Filters' />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ingredient</Text>
        <TextInput
          style={styles.input}
          onChangeText={setIngredientText}
          placeholder='Input one ingredient'
          value={ingredientText}
        />
        <Text style={styles.title}>Meal Type</Text>
        <View style={styles.mealTypeContainer}>
          {mealTypes.map((meal, index) => (
            <View key={index} style={styles.radioButtonContainer}>
              <RadioButton
                label={meal}
                customRadioColor='#52B175'
                isSelected={selectedMealType.includes(meal)}
                onPress={() => handleMealTypeSelection(meal)}
              />
            </View>
          ))}
        </View>
        <View style={styles.calendarContainer}>
          <Text style={styles.title}>Planned Meal Day</Text>
          <Calendar
            onDayPress={(day) => handleDayPressed(day)}
            minDate={new Date().toISOString().split('T')[0]}
            disableArrowLeft={true}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: '#52B175',
              },
            }}
          />
        </View>
        <Button children='Find Recipes' onPress={handleRecipeSubmit} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#DEDEDE',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    padding: 5,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  mealTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioButtonContainer: {
    width: '50%',
    marginBottom: 10,
  },
  calendarContainer: {
    marginTop: 20,
  },
});

