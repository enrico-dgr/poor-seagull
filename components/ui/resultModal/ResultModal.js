import React from "react";
// STYLE
import style from "./style";
// RN
import { View, Text, Modal, Image } from "react-native";
import { useFonts } from "expo-font";
// PROPTYPES
import PropTypes from "prop-types";
// REDUX
import { connect } from "react-redux";
//IMMAGES
import Seagull from "../../../assets/seagull/seagull3.png";
const ModalCustom = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <Modal
            visible={props.state === true}
            // visible={true}
            backdropOpacity={1}
            animationType="slide"
            transparent={true}
            style={{ width: "100%", height: "100%" }}
        >
            <View style={style.modalContent}>
                <Text style={style.title}>{props.winner} Win!</Text>
                <Image style={style.imageContainer} source={Seagull} />
            </View>
        </Modal>
    );
};

ModalCustom.defaultProps = {
    state: true,
    winner: "",
};

ModalCustom.propTypes = {
    state: PropTypes.bool,
    winner: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    gameId: state.lobby.id,
    username: state.user.name,
});

export default connect(mapStateToProps)(ModalCustom);
