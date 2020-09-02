import React from "react"
import { Text, View, Button, ScrollView } from 'react-native';
import { css } from "../assets/css/Css";
import ShopItem from "./components/ShopItem";

export default function Home(props) {
	return (
		<View style={css.container}>
			<ScrollView>
				<ShopItem label="Apple" />
				<ShopItem label="Beans" />
				
			</ScrollView>
		</View>
	)
}