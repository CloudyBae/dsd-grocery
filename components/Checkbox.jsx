import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import ThirdPartySignIn from "./ThirdPartySignIn";


const Checkbox = ({label,
                   isChecked }) => {
	return (
		<CheckBox
			style={styles.checkbox}
			title={label}
			checked={isChecked}
			checkedColor='#52B175'
		/>
	);
}

export default Checkbox;

const styles = StyleSheet.create({
	checkbox: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: 'regular',
		letterSpacing: 0.25,
	}
})
