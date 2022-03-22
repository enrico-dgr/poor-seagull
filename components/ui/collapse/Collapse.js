import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Modal,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
} from "react-native";
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

import PressableButton from "../PressableButton";
import PressableCircle from "../PressableCircle";
const Collapse = (props) => {
	const [state, setState] = useState(false);

	// const [loaded] = useFonts({
	//   Toons: require("../../assets/fonts/Mikey.ttf"),
	//   Sponge: require("../../assets/fonts/Sponge.ttf"),
	// });
	// if (!loaded) {
	//   return null;
	// }

	const renderItem = ({ item }) => (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-evenly",
				width: "100%",
				height: 50,
				backgroundColor: "white",
				marginBottom: 20,
				borderRadius: 10,
				padding: 8,
			}}
		>
			<Text style={styles.text}>
				{item.playerOne.name} - {item.playerTwo.name}
			</Text>
			<Text style={styles.text}>
				{item.playerOne.matchScore} - {item.playerTwo.matchScore}
			</Text>
			{/* <PressableCircle buttonText="GO" onPressCallBack={changePage} /> */}
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.textPhase}>{props.phaseTitle}</Text>
			{/* <PressableButton
        onPressCallBack={() => setState(!state)}
        buttonText={props.title}
      /> */}
			<SafeAreaView>
				<FlatList
					data={props.matches}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.phase + index + "phase-rank"}
				/>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "#CFE9FD",
		marginTop: 15,
		// justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "lightblue",
		padding: 12,
		margin: 16,

		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	modalContent: {
		height: "100%",
		backgroundColor: "#CFE9FD",
		padding: 22,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	textPhase: {
		// marginTop: 60,
		marginBottom: 20,
		fontSize: 25,
		fontFamily: "Toons",
		textAlign: "center",
	},
	buttonContainer: {
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		fontFamily: "Sponge",
		fontSize: 20,
	},
});

export default Collapse;
