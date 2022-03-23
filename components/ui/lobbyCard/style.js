import { StyleSheet } from "react-native";

export default StyleSheet.create({
	card: {
		width: "90%",
		height: 200,
		borderRadius: 10,
		backgroundColor: "white",
		color: "white",
		shadowColor: "grey",
		borderColor: "#66737D",
		shadowOpacity: 4,
		marginTop: 8,
		marginBottom: 8,
		marginLeft: 5,
		alignItems: "center",
	},
	title: {
		fontFamily: "Toons",
		marginVertical: 15,
		textAlign: "center",
		fontSize: 25,
		color: "grey",
	},
	titleContainer: {
		height: 50,
		width: "100%",
	},
	text: {
		fontFamily: "Toons",
		marginHorizontal: 25,
		marginVertical: 8,
		fontSize: 25,
		color: "#41637D",
	},
	textPress: {
		fontFamily: "Toons",
		textAlign: "center",
		marginVertical: 10,
		fontSize: 18,
		color: "yellow",
	},
	buttonContainer: {
		marginTop: 7,
		height: 50,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
});
