import React, { useState } from "react";
// STYLE
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// RN COMPONENTS
import { View, Text, Image, Pressable } from "react-native";
import Swiper from "react-native-web-swiper";
import Paper from "../../assets/icon/newspaper.png";
import Scissor from "../../assets/icon/scissors.png";
import Rock from "../../assets/icon/stone.png";
import style from "./style";
import { connect } from "react-redux";
import { findIndexMatchToPlay } from "space-rock-scissor-paper-game-engine/lib/utils";
import gameWss from "../../services/gameWss";
// import Question from "../../assets/icon/questionmark.png";

const Game = (props) => {
	const [modalVisible, setModalVisible] = useState(false);
	let navigate = useNavigate();
	const [loaded] = useFonts({
		Toons: require("../../assets/fonts/Mikey.ttf"),
	});

	React.useEffect(() => {
		if (!props.availableMatch) {
			navigate(`/tournament`);
		}
	}, [props.availableMatch]);

	const sendMoveToGameWss = React.useCallback(
		/**
		 * @param {import("space-rock-scissor-paper-game-engine/lib/types").Move} move
		 */
		(move) => () =>
			gameWss.send(
				JSON.stringify({
					channel: "LOBBY",
					action: {
						type: "GAME_SET_MOVE",
						payload: { id: props.gameId, move },
					},
				})
			),
		[]
	);

	if (!loaded) {
		return null;
	}

	return (
		<>
			<View style={style.container}>
				<Text style={style.title}>SELECT YOUR MOVE</Text>
				<View style={{ height: 500, width: "100%" }}>
					<Swiper
						controlsProps={{
							dotActiveStyle: { backgroundColor: "red" },
						}}
					>
						<Pressable
							onPress={sendMoveToGameWss("rock")}
							style={style.slideContainer}
						>
							<Image style={style.slideChoice} source={Rock} />
						</Pressable>
						<Pressable
							onPress={sendMoveToGameWss("scissors")}
							style={style.slideContainer}
						>
							<Image style={style.slideChoice} source={Scissor} />
						</Pressable>
						<Pressable
							onPress={sendMoveToGameWss("paper")}
							style={style.slideContainer}
						>
							<Image style={style.slideChoice} source={Paper} />
						</Pressable>
					</Swiper>
				</View>
			</View>
		</>
	);
};
{
	/* <Image style={style.slideChoice} source={props.enemychoice} />
<Image style={style.slideChoice} source={Question} /> */
}

const mapStateToProps = (state) => ({
	availableMatch: findIndexMatchToPlay(state.user.id, state.lobby.game) > -1,
	gameId: state.lobby.id,
});

export default connect(mapStateToProps)(Game);
