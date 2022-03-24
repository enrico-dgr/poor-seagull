import React from "react";
// STYLE
import style from "./style";

// CCOMPONENTS
import VideoBackground from "../../components/ui/videoBackground/VideoBackground";
import PressableButton from "../../components/ui/pressableButton/PressableButton";
// RN COMPONENTS
import { View, StyleSheet, Text } from "react-native";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// ASSETS
import Video from "../../assets/video/seagulBg.mp4";

const Home = () => {
	let navigate = useNavigate();

	const changePage = (e) => {
		navigate(`/Role`);
	};

	return (
		<>
			<View style={style.container}>
				<View style={style.titleContainer}>
					<Text style={style.title}>POOR SEAGUL</Text>
					<Text style={style.subtitle}>TOURNAMENT</Text>
				</View>
				<PressableButton onPressCallBack={changePage} buttonText="START" />
			</View>
			<VideoBackground video={Video} />
		</>
	);
};

export default Home;
