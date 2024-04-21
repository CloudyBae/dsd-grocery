import React, { useState } from 'react';
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

const Search = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ marginTop: 50 }}>
      <SearchBar
        placeholder='Type Here To Search...'
        placeholderTextColor={'rgba(255, 255, 255, 0.5'}
        onChangeText={updateSearch}
        value={search}
        inputStyle={styles.text}
        inputContainerStyle={styles.input}
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
        }}
        searchIcon={{ color: 'rgba(255, 255, 255, 0.5)' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'rgb(255, 255, 255)',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 364,
    height: 67,
    backgroundColor: 'rgb(82, 177, 117)',
  },
});

export default Search;
