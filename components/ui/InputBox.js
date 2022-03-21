import React from "react";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";
import { useFonts } from "expo-font";
const InputBox = (props) => {
	const [loaded] = useFonts({
		Toons: require("../../assets/fonts/Mikey.ttf"),
		Sponge: require("../../assets/fonts/Sponge.ttf"),
	});
	if (!loaded) {
		return null;
	}

	return (
		<TextInput
			style={styles.input}
			placeholder={props.placeholder}
			placeholderTextColor="#000"
			onChangeText={props.onChangeText}
			keyboardType={props.numeric ? "numeric" : undefined}
		/>
	);
};

InputBox.defaultProps = {
	placeholder: "",
	numeric: false,
};

InputBox.propTypes = {
	onChangeText: PropTypes.func,
	placeholder: PropTypes.string,
	numeric: PropTypes.bool,
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		width: 300,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		color: "grey",
		backgroundColor: "rgba(255, 255, 255, 0.5)",
		borderColor: "transparent",
		borderRadius: 10,
		fontFamily: "Sponge",
	},
});
export default InputBox;
