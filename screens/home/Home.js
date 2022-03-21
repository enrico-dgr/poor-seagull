import React from "react";
// STYLE
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// RN COMPONENTS
import { View, StyleSheet, Text } from "react-native";
import VideoBackground from "../../components/ui/videoBackground/VideoBackground";
import PressableButton from "../../components/ui/PressableButton";

const Home = () => {
	let navigate = useNavigate();
	const [loaded] = useFonts({
		Toons: require("../../assets/fonts/Mikey.ttf"),
	});

	const changePage = (e) => {
		navigate(`/Role`);
	};

	if (!loaded) {
		return null;
	}

	return (
		<>
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>POOR SEAGUL</Text>
					<Text style={styles.subtitle}>TOURNAMENT</Text>
				</View>
				<PressableButton onPressCallBack={changePage} buttonText="START" />
			</View>
			<VideoBackground />
		</>
	);
};

const styles = StyleSheet.create({
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
		marginTop: 80,
		alignItems: "center",
	},
	title: {
		textAlign: "center",
		fontFamily: "Toons",
		fontSize: 50,
	},
	subtitle: {
		fontFamily: "Toons",
		fontSize: 30,
		color: "blue",
	},
});

export default Home;
