import React from "react"
import { Text, View, Button, ScrollView } from 'react-native';
import { css } from "../assets/css/Css";
import ListContainer from "./components/ListContainer"

export default function Home(props) {
	return (
		<View style={css.container}>
			<ListContainer />
		</View>
	)
}