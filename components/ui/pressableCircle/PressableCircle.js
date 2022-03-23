import React from "react";
// STYLE
import style from "./style";
// RN
import { Text, Pressable } from "react-native";
// PROPTYPES
import PropTypes from "prop-types";

const PressableCircle = (props) => {
	const onPressCallBack = (e) => {
		props.onPressCallBack();
	};
	return (
		<Pressable
			onPress={onPressCallBack}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? "#6B9DFA" : "#567df7",
				},
				style.buttonContainer,
				props.buttonStyle,
			]}
		>
			<Text style={style.buttonStart}>{props.buttonText}</Text>
		</Pressable>
	);
};

PressableCircle.defaultProps = {
	buttonText: "",
	buttonStyle: {},
};

PressableCircle.propTypes = {
	buttonText: PropTypes.string,
	buttonStyle: PropTypes.object,
};

export default PressableCircle;
