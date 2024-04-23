import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { Title } from '../components/Typography';

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
      <View style={styles.mainContainer}>
        <Title style={styles.filterTitles}>Ingredient</Title>
        <TextInput
          style={styles.input}
          onChangeText={setIngredientText}
          placeholder='Input one ingredient'
          value={ingredientText}
        />
        <Title style={styles.filterTitles}>Meal Type</Title>
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
          <Title style={styles.filterTitles}>Planned Meal Day</Title>
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
    marginTop: 50,
  },
  filterTitles: {
    marginBottom: 20,
  },
  mainContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontFamily: 'Gilroy-Medium',
    marginBottom: 20,
  },
  mealTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButtonContainer: {
    width: '50%',
    marginBottom: 10,
  },
  calendarContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});
