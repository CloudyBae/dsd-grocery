import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CheckBox, ListItem } from '@rneui/themed';
import FlexColContainer from '../containers/FlexContainer';
/*
const list = [
  {
    id:0,
    label:'Gluten',
    checked: false
  },
  {
    id:1,
    label:'Dairy',
    checked: false
  },
  {
    id:2,
    label:'Eggs',
    checked: false
  },
  {
    id:3,
    label:'Soy',
    checked: false
  },
  {
    id:4,
    label:'Wheat',
    checked: false
  },
  {
    id:5,
    label:'Fish',
    checked: false
  },
  {
    id:6,
    label:'Shellfish',
    checked: false
  },
  {
    id:7,
    label:'Tree Nuts',
    checked: false
  },
  {
    id:8,
    label:'Peanuts',
    checked: false
  },
]

this.state = {
  list: list
}
*/
const AllergenFilters = () => {

  const [checked, setChecked] = React.useState([false, false]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allergies</Text>
      <FlexColContainer>
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
          <ListItem.Title>Gluten</ListItem.Title>
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
          <ListItem.Title>Dairy</ListItem.Title>
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
            <ListItem.Title>Eggs</ListItem.Title>
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
            <ListItem.Title>Soy</ListItem.Title>
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
            <ListItem.Title>Wheat</ListItem.Title>
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
            <ListItem.Title>Fish</ListItem.Title>
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
            <ListItem.Title>Shellfish</ListItem.Title>
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
            <ListItem.Title>Tree Nuts</ListItem.Title>
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
            <ListItem.Title>Peanuts</ListItem.Title>
          </ListItem.Content>
        </ListItem>

      </FlexColContainer>
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

export default AllergenFilters;
