import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "#CFE9FD",
	},
	button: {
		backgroundColor: "lightblue",
		padding: 12,
		margin: 16,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	modalContent: {
		height: "100%",
		backgroundColor: "#CFE9FD",
		width: "100%",
		padding: 22,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	title: {
		marginTop: 60,
		marginBottom: 20,
		fontSize: 50,
		fontFamily: "Toons",
		textAlign: "center",
	},
	buttonContainer: {
		alignItems: "center",
	},
	text: {
		marginBottom: 20,
		textAlign: "center",
		fontFamily: "Toons",
		fontSize: 30,
	},
});
