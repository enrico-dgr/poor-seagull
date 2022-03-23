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
import { findIndexMatchToPlay } from "space-rock-scissor-paper-game-engine/lib/utils";
import gameWss from "../../services/gameWss";
import Question from "../../assets/icon/questionmark.png";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
import ResultModal from "../../components/ui/resultModal/ResultModal";

const Game = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    let navigate = useNavigate();
    const [loaded] = useFonts({
        Toons: require("../../assets/fonts/Mikey.ttf"),
    });

    React.useEffect(() => {
        if (!props.availableMatch) {
            navigate(`/tournament`);
        }
    }, [props.availableMatch]);

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

    if (!loaded) {
        return null;
    }

    return (
        <>
            <View style={style.container}>
                {modalVisible && <ResultModal winner="mimmo" />}
                <Text style={style.title}>ENEMY: 1</Text>
                <View style={style.enemybox}>
                    <Image style={style.question} source={Question} />
                    {/* <Image style={style.slideChoice} source={props.enemychoice} /> */}
                </View>
                <Text style={style.title}> YOUR: 2 </Text>
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
});

export default connect(mapStateToProps)(Game);
