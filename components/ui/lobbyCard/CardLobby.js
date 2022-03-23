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

    const changePageCallback = (e) => {
        props.changePageCallback();
    };
    if (!loaded) {
        return null;
    }
    return (
        <View style={style.card}>
            <View style={style.titleContainer}>
                <Text style={style.title}>{props.title}</Text>
            </View>
            <Text style={style.text}>Players: {props.nPlayers}</Text>
            <Text style={style.text}>Creator: {props.creator}</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Pressable
                    onPress={changePageCallback}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#6B9DFA" : "#567df7",
                        },
                        style.buttonContainer,
                    ]}
                >
                    <Text style={style.textPress}>{props.button}</Text>
                </Pressable>
            </View>
        </View>
    );
};
CardLobby.defaultProps = {
    title: "",
    nPlayers: "",
    creator: "",
    button: "",
};

CardLobby.propTypes = {
    title: PropTypes.string.isRequired,
    nPlayers: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    button: PropTypes.string,
};

export default CardLobby;
