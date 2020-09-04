import React, { useState } from "react"
import { Text, View, Button, ScrollView, ToastAndroid, Alert } from 'react-native';
import ShopItem from "./ShopItem";
import ShopItemEntry from "./ShopItemEntry";


export default function() {
	const [ shopItems, setShopItems ] = useState([])

	function addItem(item) {
		const itemName = item.trim()
		if(itemName !== "") {
			setShopItems([{label: itemName, amount: 0}, ...shopItems])
			ToastAndroid.show(`Item "${itemName}" added to your shop list!`, ToastAndroid.SHORT)
		}
	}

	function deleteItem(itemIndex) {
		let remainedItems = Array.from(shopItems)
		remainedItems.splice(itemIndex, 1)
		setShopItems(remainedItems)
	}

	function askDeleteItem(itemIndex) {
		Alert.alert("Warning", `Are you sure you want to remove "${shopItems[itemIndex].label}" from your list?`, [
			{
				text: "Cancel",
				onPress: () => alert("BOOOOORAA"),
				style: "cancel"
			},
			{
				text: "OK",
				onPress: () => deleteItem(itemIndex)
			}
		])
	}

	function updateItem(index, amount) {
		// broken function
		// to do: when passing the parameters, fix the wrong value setting in all the items. :(
		setShopItems(() => {
			let listCopy = [...shopItems];
			listCopy[index].amount = amount;
			return listCopy
		})
	}
	console.log("mano")


	return (
		<View>
			<ShopItemEntry onPress={addItem} />
			<ScrollView>
				{
					shopItems.map((item, index) => {
						return <ShopItem label={item.label} amount={item.amount} key={index} index={index}
						onLongPress={() => askDeleteItem(index)} onUpdate={updateItem} />
					})
				}
			</ScrollView>
		</View>
	)
}