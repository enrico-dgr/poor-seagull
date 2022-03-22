import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		zIndex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	titleContainer: {
		flexGrow: 1,
		marginTop: 5,
		alignItems: "center",
	},
	title: {
		textAlign: "center",
		fontFamily: "Toons",
		fontSize: 40,
		marginBottom: 20,
	},
	subtitle: {
		fontFamily: "Toons",
		fontSize: 30,
		color: "blue",
	},
	slideChoice: {
		marginVertical: 20,
		width: 305,
		height: 259,
	},
	slideContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(20,20,200,0.3)",
	},
});
