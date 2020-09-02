import { StyleSheet } from "react-native"

const css = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		top: "5%"
	},

	shopItemContainer: {
		width: "100%",
		paddingLeft: 20,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#eee",
		paddingBottom: 10,
		paddingTop: 10,
		marginTop: 2,
		marginBottom: 2
	},

	shopItemButton: {
		borderRadius: 5,
		width: 40,
		padding: 10,
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
	},

	shopItemLabel: {
		fontSize: 30,
		fontFamily: "sans-serif-light",
	},

	shopItemButtonContainer: {
		flexDirection: "row",
		marginLeft: "auto",
		marginRight: 5
	}
});

export { css }