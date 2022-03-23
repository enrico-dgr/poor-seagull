import React from "react";
// STYLE
import style from "./style";
// RN
import { Text, Pressable } from "react-native";
// PROPTYPES
import PropTypes from "prop-types";

const PressableButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressCallBack}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "#6B9DFA" : "#567df7",
                },
                style.buttonContainer,
            ]}
        >
            <Text style={style.buttonStart}>{props.buttonText}</Text>
        </Pressable>
    );
};

PressableButton.defaultProps = {
    buttonText: "",
};

PressableButton.propTypes = {
    buttonText: PropTypes.string,
};

export default PressableButton;
