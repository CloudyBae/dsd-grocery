import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ updateSearch, value }) => {
  return (
    <View style={styles.container}>
      <SearchBar
        id='searchBar'
        placeholder='Type Here To Search...'
        placeholderTextColor={'#727272'}
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
        searchIcon={<AntDesign name='search1' size={24} color='#121212' />}
      />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 9,
    justifyContent: 'center',
  },
});

export default Search;
