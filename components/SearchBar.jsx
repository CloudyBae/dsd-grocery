import React from 'react';
import {StyleSheet, Text, SearchBar} from 'react-native'

export default function SearchBarComp(props) {
    const bar ={search, title} = props;
    return (
        <SearchBar
            search ={() => console.log("")}>

            <Text style={styles.text}>{title}</Text>
        </SearchBar>
    );
};

const styles = StyleSheet.create({
	search: {
		justifyContent: 'left',
		alignItems: 'left',
		width: 420,
		height: 75,
		borderRadius: 25,
	},
});
