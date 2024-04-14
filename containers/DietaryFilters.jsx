import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';
import FlexContainer from '../containers/FlexContainer';
/*
const list = [
  {
    id:0,
    label:'Vegetarian',
    checked: false
  },
  {
    id:1,
    label:'Vegan',
    checked: false
  },
  {
    id:2,
    label:'Paleo',
    checked: false
  },
  {
    id:3,
    label:'High-Fiber',
    checked: false
  },
  {
    id:4,
    label:'High-Protein',
    checked: false
  },
  {
    id:5,
    label:'Low-Carb',
    checked: false
  },
  {
    id:6,
    label:'Low-Fat',
    checked: false
  },
  {
    id:7,
    label:'Low-Sodium',
    checked: false
  },
  {
    id:8,
    label:'Low-Sugar',
    checked: false
  },
  {
    id:9,
    label:'Alcohol-Free',
    checked: false
  },
  {
    id:10,
    label:'Balanced',
    checked: false
  },
  {
    id:11,
    label:'Immunity',
    checked: false
  }
]

this.state = {
  list: list
}
*/
const DietaryFilters = () => {

  const [checked, setChecked] = React.useState([false, false]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dietary Preferences</Text>
      <FlexContainer>
      <ListItem>
        <ListItem.CheckBox
          // Use ThemeProvider to change the defaults of the checkbox
          checkedColor='#52B175'
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checked={checked[0]}
          onPress={() => setChecked([!checked[0], checked[1]])}
        />
        <ListItem.Content>
          <ListItem.Title>Vegetarian</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <ListItem.CheckBox
          // Use ThemeProvider to change the defaults of the checkbox
          checkedColor='#52B175'
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checked={checked[1]}
          onPress={() => setChecked([checked[0], !checked[1]])}
        />
        <ListItem.Content>
          <ListItem.Title>Vegan</ListItem.Title>
        </ListItem.Content>
      </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Paleo</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>High-Fiber</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>High-Protein</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Low-Carb</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Low-Fat</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Low-Sodium</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Low-Sugar</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Alcohol-Free</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Balanced</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.CheckBox
            // Use ThemeProvider to change the defaults of the checkbox
            checkedColor='#52B175'
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={checked[1]}
            onPress={() => setChecked([checked[0], !checked[1]])}
          />
          <ListItem.Content>
            <ListItem.Title>Immunity</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </FlexContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'rgb(240,240,240)'
  },
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
  },
});

export default DietaryFilters;
