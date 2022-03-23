import React, { useState } from "react";
// STYLE
import { useFonts } from "expo-font";

// RN COMPONENTS
import { View, Text, Image, Pressable } from "react-native";
import Swiper from "react-native-web-swiper";
import Paper from "../../assets/icon/newspaper.png";
import Scissor from "../../assets/icon/scissors.png";
import Rock from "../../assets/icon/stone.png";
import style from "./style";
import { connect } from "react-redux";
import {
	findIndexMatchToPlay,
	findMatchToPlay,
} from "space-rock-scissor-paper-game-engine/lib/utils";
import gameWss from "../../services/gameWss";
import Question from "../../assets/icon/questionmark.png";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
import ResultModal from "../../components/ui/resultModal/ResultModal";

const Game = (props) => {
	const [state, setState] = useState({
		newMove: false,
	});
	let navigate = useNavigate();
	const [loaded] = useFonts({
		Toons: require("../../assets/fonts/Mikey.ttf"),
	});

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

	const scores = {
		enemy: "",
		user: "",
	};

	const moves = {
		enemy: null,
		user: null,
	};

	if (!!props.match) {
		const lastRound = [...(props.match.rounds ?? [])]
			.reverse()
			.find((round_) => round_.moveOne !== null);

		if (props.userId === props.match.playerOne.id) {
			scores.user = `${props.match?.playerOne.name}: ${props.match?.playerOne.matchScore}`;
			scores.enemy = `${props.match?.playerTwo.name}: ${props.match?.playerTwo.matchScore}`;
			moves.user = lastRound?.moveOne;
			moves.enemy = lastRound?.moveTwo;
		} else {
			scores.user = `${props.match?.playerTwo.name}: ${props.match?.playerTwo.matchScore}`;
			scores.enemy = `${props.match?.playerOne.name}: ${props.match?.playerOne.matchScore}`;
			moves.user = lastRound?.moveTwo;
			moves.enemy = lastRound?.moveOne;
		}
	}

	React.useEffect(() => {
		if (!props.availableMatch) {
			navigate(`/tournament`);
		}

		let timeout = null;
		if (!state.newMove) {
			setState((prev) => ({ ...prev, newMove: true }));
		} else {
			timeout = setTimeout(
				() => setState((prev) => ({ ...prev, newMove: false })),
				3000
			);
		}

		return () => {
			if (!!timeout) clearTimeout(timeout);
		};
	}, [props.availableMatch, moves.enemy]);

	if (!loaded || !props.match) {
		return null;
	}

	return (
		<>
			<View style={style.container}>
				{false && <ResultModal winner="mimmo" />}
				<Text style={style.title}>{scores.enemy}</Text>
				<View style={style.enemybox}>
					{!moves.enemy || !state.newMove ? (
						<Image style={style.question} source={Question} />
					) : (
						<Image
							style={style.slideChoice}
							source={
								moves.enemy === "rock"
									? Rock
									: moves.enemy === "paper"
									? Paper
									: Scissor
							}
						/>
					)}
				</View>
				<Text style={style.title}> {scores.user} </Text>
				<View style={style.boxchoice}>
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

const mapStateToProps = (state) => ({
	availableMatch: findIndexMatchToPlay(state.user.id, state.lobby.game) > -1,
	gameId: state.lobby.id,
	userId: state.user.id,
	match: findMatchToPlay(state.user.id, state.lobby.game),
});

export default connect(mapStateToProps)(Game);
