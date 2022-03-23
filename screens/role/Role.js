import React from "react";
// STYLE
import { useFonts } from "expo-font";
import style from "./style";

// RN
import { Text, View } from "react-native";

// COMPONENTS
import Swiper from "react-native-web-swiper";
import InputBox from "../../components/ui/inputBox/InputBox";
import PressableButton from "../../components/ui/pressableButton/PressableButton";
import CardRules from "../../components/ui/cardRules/CardRules";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

// WSS
import gameWss from "../../services/gameWss";

// Images
import SeagulOne from "../../assets/seagull/seagull1.png";
import SeagulTwo from "../../assets/seagull/seagull2.png";
import SeaOne from "../../assets/seagull/sea1.jpeg";
import SeaTwo from "../../assets/seagull/sea2.jpeg";

const Role = (props) => {
    let navigate = useNavigate();
    const [state, setState] = React.useState({
        username: "",
    });
    const [loaded] = useFonts({
        Toons: require("../../assets/fonts/Mikey.ttf"),
    });

    const onChangeText = (text) =>
        setState((prev) => ({ ...prev, username: text }));

    const sendNameToWss = () => {
        setState((prev) => {
            gameWss.send(
                JSON.stringify({
                    channel: "USER",
                    action: {
                        type: "SET_DATA",
                        payload: {
                            name: prev.username,
                        },
                    },
                })
            );
            return prev;
        });
    };
    React.useEffect(() => {
        if (props.name === state.username) {
            navigate(`/lobbylist`);
        }
    }, [props.name, state.username]);

    if (!loaded) {
        return null;
    }
    return (
        <View style={style.container}>
            <Swiper>
                <View style={[style.slideContainer]}>
                    <CardRules
                        ruleTitle="Welcome"
                        textOne="Rock, Paper, Scissors "
                        textTwo="Poor Seagull Style"
                        ruleImage={SeagulOne}
                        imageBg={SeaOne}
                    />
                </View>
                <View style={[style.slideContainer]}>
                    <CardRules
                        ruleTitle="Rules"
                        textOne="Create or Choose the Lobby "
                        textTwo="Challenge your friends "
                        ruleImage={SeagulTwo}
                        imageBg={SeaTwo}
                    />
                </View>
                <View style={[style.slideContainer, style.slide3]}>
                    <Text style={style.text}>Input Username</Text>
                    <InputBox
                        placeholder="Username"
                        onChangeText={onChangeText}
                    />
                    <PressableButton
                        onPressCallBack={sendNameToWss}
                        buttonText="ENTER"
                    />
                </View>
            </Swiper>
        </View>
    );
};

const mapStateToProps = (state) => ({ name: state.user.name });

export default connect(mapStateToProps)(Role);
