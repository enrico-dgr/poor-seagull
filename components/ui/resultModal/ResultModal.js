import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Seagull from "../../../assets/seagull3";
// import PressableButton from "../../components/ui/PressableButton";
const ModalCustom = (props) => {
    const [loaded] = useFonts({
        Toons: require("../../../assets/fonts/Mikey.ttf"),
        Sponge: require("../../../assets/fonts/Sponge.ttf"),
    });
    let navigate = useNavigate();

    useEffect(() => {
        if (props.gameId > -1) {
            navigate(`/tournament`);
        }
    }, [props.gameId]);
    return (
        <Modal
            visible={props.state === true}
            backdropOpacity={1}
            animationType="slide"
            transparent={true}
            style={{ width: "80%", height: "100%" }}
        >
            <View style={styles.modalContent}>
                {/* {_renderModalContent()} */}
                <Text style={styles.title}>{props.title}</Text>
                <Image style={styles.slideContainer} source={Seagull} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    modalContent: {
        width: 60,
        height: "80%",
        backgroundColor: "#CFE9FD",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    slideContainer: {
        marginRight: 50,
        width: 305,
        height: 259,
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 50,
        fontFamily: "Toons",
        textAlign: "center",
    },
    buttonContainer: {
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontFamily: "Toons",
        fontSize: 30,
    },
});

const mapStateToProps = (state) => ({
    gameId: state.lobby.id,
    username: state.user.name,
});

export default connect(mapStateToProps)(ModalCustom);
