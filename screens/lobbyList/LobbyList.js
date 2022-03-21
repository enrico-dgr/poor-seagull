import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import CardLobby from "../../components/ui/lobbyCard/CardLobby";
import ModalCustom from "../../components/ui/modal/ModalCustom";
import PressableButton from "../../components/ui/PressableButton";
import { useNavigate } from "react-router-dom";
import gameWss from "../../services/gameWss";
import { connect } from "react-redux";
const LobbyList = (props) => {
	const [state, setState] = useState({
		visibleModal: false,
	});
	const [loaded] = useFonts({
		Toons: require("../../assets/fonts/Mikey.ttf"),
		Sponge: require("../../assets/fonts/Sponge.ttf"),
	});

	let navigate = useNavigate();

	const changePage = (id) => () =>
		gameWss.send(
			JSON.stringify({
				channel: "LOBBY",
				action: {
					type: "JOIN",
					payload: {
						id,
					},
				},
			})
		);

	const lobbiesElements = React.useMemo(() => {
		const map = (lobby) => (
			<CardLobby
				button="ENTER"
				creator="Creator"
				changePageCallback={changePage(lobby.id)}
				key={lobby.id}
				nPlayers="numero players"
				title="Title"
			/>
		);
		return props.allLobbies.map(map);
	}, [props.allLobbies]);

	useEffect(() => {
		const interval = setInterval(
			() =>
				gameWss.send(
					JSON.stringify({
						channel: "LOBBY",
						action: {
							type: "SHOW_ALL",
							payload: {},
						},
					})
				),
			1000
		);

		if (props.gameId > -1) {
			navigate(`/tournament`);
		}

		return () => {
			clearInterval(interval);
		};
	}, [props.gameId]);

	return (
		<View style={{ backgroundColor: "#CFE9FD", height: "100%", width: "100%" }}>
			<Text style={styles.title}>LOBBIES LIST</Text>
			<View style={{ alignItems: "center", marginTop: 10 }}>
				<PressableButton
					onPressCallBack={() => {
						setState({ visibleModal: true });
					}}
					buttonText="NEW"
				/>
			</View>
			<ScrollView style={styles.container}>
				<View style={{ alignItems: "center" }}>{lobbiesElements}</View>
			</ScrollView>

			<ModalCustom
				state={state.visibleModal}
				onPressCallBack={() => setState({ visibleModal: false })}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "80%",
		backgroundColor: "#CFE9FD",
	},
	title: {
		textAlign: "center",
		marginTop: 60,
		marginBottom: 20,
		fontSize: 50,
		fontFamily: "Toons",
	},
});

const mapStateToProps = (state) => ({
	allLobbies: state.lobby.allLobbies,
	gameId: state.lobby.id,
});

export default connect(mapStateToProps)(LobbyList);
