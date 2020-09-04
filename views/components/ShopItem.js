import React, { useState, useEffect } from "react"
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { css } from "../../assets/css/Css";



export default function(props) {
	const label = props.label;
	const [amount, setAmount] = useState(props.amount);
	const index = props.index;
	

	useEffect(() => props.onUpdate(index, amount), [amount])

	function ShopItemButton(props) {
		return (
			<TouchableOpacity style={[css.shopItemButton, {backgroundColor: props.bg}]} onPress={props.onPress} onLongPress={props.onLongPress}>
				<Text style={{fontWeight: "bold"}}>{props.text}</Text>
			</TouchableOpacity>
		)
	}

	return (
		<View style={css.shopItemContainer}>
			<Text style={css.shopItemLabel}>{label}</Text>
			<Text>  x{amount}</Text>
			<View style={css.shopItemButtonContainer}>
				<ShopItemButton bg="#7bc043" text="+" onPress={() => setAmount(amount + 1)}/>
				<ShopItemButton bg="#fe4a49" text="-" onPress={() => {if(amount > 0) setAmount(amount - 1)}} onLongPress={props.onLongPress} />
			</View>
		</View>
	)
}