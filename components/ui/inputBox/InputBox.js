import React from "react";
// RN
import { TextInput } from "react-native";
// PROPTYPE
import PropTypes from "prop-types";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";

const InputBox = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });
    if (!loaded) {
        return null;
    }

    return (
        <TextInput
            style={style.input}
            placeholder={props.placeholder}
            placeholderTextColor="grey"
            onChangeText={props.onChangeText}
            value={props.value}
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
    value: PropTypes.string,
};

export default InputBox;
