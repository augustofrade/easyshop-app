import React, { useState } from "react"
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { css } from "../../assets/css/Css";


function ShopItemButton(props) {
	return (
		<TouchableOpacity style={[css.shopItemButton, {backgroundColor: props.bg}]} onPress={props.onPress}>
			<Text style={{fontWeight: "bold"}}>{props.text}</Text>
		</TouchableOpacity>
	)
}

export default function(props) {
	const label = props.label;
	const [amount, setAmount] = useState(0)

	return (
		<View style={css.shopItemContainer}>
			<Text style={css.shopItemLabel}>{label}</Text>
			<Text>  x{amount}</Text>
			<View style={css.shopItemButtonContainer}>
				<ShopItemButton bg="#7bc043" text="+" onPress={() => setAmount(amount + 1)}/>
				<ShopItemButton bg="#fe4a49" text="-" onPress={() => {if(amount > 0) setAmount(amount - 1)}} />
			</View>
		</View>
	)
}