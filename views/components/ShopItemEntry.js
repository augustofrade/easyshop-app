import React, { useState } from "react"
import { Text, View, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { css } from "../../assets/css/Css"

export default function(props) {
	const [item, setItem ] = useState("")

	function getItemValue() {
		props.onPress(item)
		// Make function to clean the text input
	}


	return (
		<View style={css.shopItemEntryContainer}>
			<TextInput style={css.shopItemEntryInput} placeholder="Shop Item" onChangeText={item => setItem(item)} />
			<View style={[css.shopItemButtonContainer, {marginRight: 15}]}>
				<TouchableOpacity onPress={getItemValue}>
					<Text style={css.shopItemEntrySubmit}>ADD</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}