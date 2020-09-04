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
	},

	shopItemEntryContainer: {
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#ddd",
		paddingTop: 15,
		paddingBottom: 15
	},

	shopItemEntryInput: {
		borderStyle: "solid",
		borderWidth: 1,
		padding: 5,
		paddingLeft: 10,
		fontSize: 20,
		marginLeft: 20,
		borderColor: "#8395a7",
		color: "#576574",
		borderRadius: 5,
		backgroundColor: "#fff",
		width: "65%"
	},
	shopItemEntrySubmit: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#7bc043",
		padding: 15,
		paddingLeft: 35,
		paddingRight: 35,
		borderRadius: 2
	}
});

export { css }