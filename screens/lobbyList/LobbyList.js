import React, { useEffect, useState } from "react";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";
//  RN
import { View, Text, ScrollView } from "react-native";
// COMPONENTS
import CardLobby from "../../components/ui/lobbyCard/CardLobby";
import ModalCustom from "../../components/ui/modal/ModalCustom";
import PressableButton from "../../components/ui/pressableButton/PressableButton";
// ROUTER DOM
import { useNavigate } from "react-router-dom";
// WSS
import gameWss from "../../services/gameWss";
// REDUX
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
				creator={lobby?.creator?.name}
				changePageCallback={changePage(lobby.id)}
				key={lobby?.id}
				nPlayers={`${lobby?.users?.length}/${lobby?.game?.playerNum} `}
				title={lobby?.name}
			/>
		);
		return props.allLobbies.map(map);
	}, [props.allLobbies]);

	useEffect(() => {
		// subscribe
		gameWss.send(
			JSON.stringify({
				channel: "LOBBY",
				action: {
					type: "SHOW_ALL",
					payload: {
						show: true,
					},
				},
			})
		);

		return () => {
			// unsubscribe
			gameWss.send(
				JSON.stringify({
					channel: "LOBBY",
					action: {
						type: "SHOW_ALL",
						payload: {
							show: false,
						},
					},
				})
			);
		};
	}, []);
	useEffect(() => {
		if (props.gameId > -1) {
			navigate(`/tournament`);
		}
	}, [props.gameId]);

	if (!loaded) {
		return null;
	}
	return (
		<View style={style.view}>
			<Text style={style.title}>LOBBIES LIST</Text>
			<View style={{ alignItems: "center", marginTop: 10 }}>
				<PressableButton
					onPressCallBack={() => {
						setState({ visibleModal: true });
					}}
					buttonText="NEW"
				/>
			</View>
			<ScrollView style={style.container}>
				<View style={{ alignItems: "center" }}>{lobbiesElements}</View>
			</ScrollView>

			<ModalCustom
				state={state.visibleModal}
				onPressCallBack={() => setState({ visibleModal: false })}
			/>
		</View>
	);
};

const mapStateToProps = (state) => ({
	allLobbies: state.lobby.allLobbies,
	gameId: state.lobby.id,
});

export default connect(mapStateToProps)(LobbyList);
