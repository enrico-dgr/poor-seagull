import React from "react";
// RN
import { View, StyleSheet, Text, Pressable } from "react-native";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";
// PROPTYPES
import PropTypes from "prop-types";

const CardLobby = (props) => {
	const [loaded] = useFonts({
		Toons: require("../../../assets/fonts/Mikey.ttf"),
		Sponge: require("../../../assets/fonts/Sponge.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return (
		<View style={style.card}>
			<View style={style.titleContainer}>
				<Text style={style.title}>{props.title}</Text>
			</View>
			{!!props.nPlayers && (
				<Text style={style.text}>Players: {props.nPlayers}</Text>
			)}
			<Text style={style.text}>Owner: {props.owner}</Text>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Pressable
					onPress={props.buttonDisabled && props.onPressButton}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? "#6B9DFA" : "#567df7",
						},
						style.buttonContainer,
						props.buttonDisabled && {
							backgroundColor: "gray",
						},
					]}
				>
					<Text style={style.textPress}>{props.button}</Text>
				</Pressable>
			</View>
		</View>
	);
};
CardLobby.defaultProps = {
	button: "",
	buttonDisabled: false,
	onPressButton: () => undefined,
	owner: "",
	title: "",
};

CardLobby.propTypes = {
	button: PropTypes.string,
	buttonDisabled: PropTypes.bool,
	nPlayers: PropTypes.string,
	onPressButton: PropTypes.func,
	owner: PropTypes.string.isRequired,
	title: PropTypes.string,
};

export default CardLobby;
