import React, { useState, useEffect } from "react";
// RN
import { View, Text, Modal } from "react-native";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// COMPONENTS
import PressableButton from "../pressableButton/PressableButton";
import InputBox from "../inputBox/InputBox";
import PressableCircle from "../pressableCircle/PressableCircle";
// PROPTYPES
import PropTypes from "prop-types";
// REDUX
import { connect } from "react-redux";
// WSS
import gameWss from "../../../services/gameWss";

const ModalCustom = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });
    let navigate = useNavigate();

    const [state, setState] = useState({
        playerNum: 2,
        name: `${props.username}'s lobby`,
        maxMatchVictories: 2,
    });

    const setPlayerNum = (num) => () =>
        setState((prev) => ({ ...prev, playerNum: num }));

    const onChangeName = (text) =>
        setState((prev) => ({ ...prev, name: text }));

    const onChangeMaxVictories = (text) =>
        setState((prev) => ({ ...prev, maxMatchVictories: Number(text) }));

    const onPressCallBack = (e) => {
        props.onPressCallBack();
    };
    const askWssToCreateGame = () => {
        const payload = {
            playerNum: state.playerNum,
            maxMatchVictories: state.maxMatchVictories,
            name: state.name,
        };
        console.log(payload);
        gameWss.send(
            JSON.stringify({
                channel: "LOBBY",
                action: {
                    type: "CREATE",
                    payload,
                },
            })
        );
    };

    useEffect(() => {
        if (props.gameId > -1) {
            navigate(`/tournament`);
        }
    }, [props.gameId]);
    if (!loaded) {
        return null;
    }
    return (
        <Modal
            visible={props.state === true}
            backdropOpacity={1}
            animationType="slide"
            transparent={false}
            style={{ width: "80%", height: "100%" }}
        >
            <View style={style.modalContent}>
                <Text style={style.title}>CREATE LIST</Text>

                <View style={style.buttonContainer}>
                    <Text style={style.text}>PLAYERS NUMBER</Text>
                    <View style={style.viewPlayersNumber}>
                        <View style={style.viewButtonsCircles}>
                            <PressableCircle
                                buttonText="2"
                                onPressCallBack={setPlayerNum(2)}
                            />
                            <PressableCircle
                                buttonText="4"
                                onPressCallBack={setPlayerNum(4)}
                            />
                            <PressableCircle
                                buttonText="8"
                                onPressCallBack={setPlayerNum(8)}
                            />
                            <PressableCircle
                                buttonText="16"
                                onPressCallBack={setPlayerNum(16)}
                            />
                        </View>
                    </View>
                    <Text style={style.text}>LOBBY'S NAME</Text>
                    <InputBox
                        placeholder="Lobby's Name"
                        value={state.name}
                        onChangeText={onChangeName}
                    />
                    <Text style={style.text}>MAX MATCH VICTORIES</Text>
                    <InputBox
                        placeholder="Number"
                        numeric={true}
                        value={state.maxMatchVictories + ""}
                        onChangeText={onChangeMaxVictories}
                    />
                    <View style={{ marginTop: 15 }}>
                        <PressableButton
                            buttonText="CREATE"
                            onPressCallBack={askWssToCreateGame}
                        />
                        <PressableButton
                            buttonText="CLOSE"
                            onPressCallBack={onPressCallBack}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

ModalCustom.defaultProps = {
    onChangeText: "",
    state: Boolean,
};

ModalCustom.propTypes = {
    onChangeText: PropTypes.string.isRequired,
    state: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    gameId: state.lobby.id,
    username: state.user.name,
});

export default connect(mapStateToProps)(ModalCustom);
