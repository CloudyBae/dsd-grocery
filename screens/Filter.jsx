import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall  } from '../components/Typography';

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

  const handleRecipeSubmit = () => {
    const data = {
      ingredient: ingredientText,
      mealType: selectedMealType,
      plannedDay: plannedMealDay,
    };

    console.log('data: ', data);
    navigation.navigate('Recipe', { recipeData: data });
  };

  return (
    <>
      <View style={styles.filterHeader}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel='Back to home'
          onPress={() => navigation.navigate('Home')}
          style={{ marginHorizontal: 10, marginRight: 150 }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>X</Text>
        </TouchableOpacity>
        <Header pageTitle='Filters' />
      </View>
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
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#DEDEDE',
  },
  input: {
    height: 40,
    borderRadius: 4,
    width: 250,
    backgroundColor: '#fff',
  },
  mealTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButtonContainer: {
    width: '50%',
  },
  calendarContainer: {
  },
});
