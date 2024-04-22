import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/base';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from './Typography';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ updateSearch, value }) => {
  return (
    <View style={styles.container}>
      <SearchBar
        id='searchBar'
        placeholder='Type Here To Search...'
        placeholderTextColor={'#7C7C7C'}
        onChangeText={updateSearch}
        value={value}
        inputStyle={styles.text}
        inputContainerStyle={styles.input}
        containerStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
        }}
        searchIcon={<AntDesign name='search1' size={24} color='black' />}
      />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 51,
    backgroundColor: '#F2F3F2',
    borderRadius: 18,
  },
});

export default Search;
