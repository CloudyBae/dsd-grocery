import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Checkbox from '../components/Checkbox';

const DietaryFilters = ({ dietHeader, allergenHeader }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{dietHeader}</Text>
			<Checkbox/>

			<Text style={styles.title}>{allergenHeader}</Text>
			<Checkbox/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 60,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	title: {
		fontFamily: 'Gilroy-Bold',
		fontSize: 24,
	},
});

export default DietaryFilters;