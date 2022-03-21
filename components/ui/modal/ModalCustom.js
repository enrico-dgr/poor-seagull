import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
import PressableButton from "../PressableButton";
import InputBox from "../InputBox";
import PressableCircle from "../PressableCircle";

// import PressableButton from "../../components/ui/PressableButton";
const ModalCustom = (props) => {
  const [loaded] = useFonts({
    Toons: require("../../../assets/fonts/Mikey.ttf"),
    Sponge: require("../../../assets/fonts/Sponge.ttf"),
  });
  let navigate = useNavigate();

  const onPressCallBack = (e) => {
    props.onPressCallBack();
  };
  const changePage = (e) => {
    navigate(`/tournament`);
  };
  return (
    <Modal
      visible={props.state === true}
      backdropOpacity={1}
      animationType="slide"
      transparent={false}
      style={{ width: "80%", height: "100%" }}
    >
      <View style={styles.modalContent}>
        {/* {_renderModalContent()} */}
        <Text style={styles.title}>CREATE LIST</Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.text}>PLAYERS NUMBER</Text>
          <View
            style={{
              width: "70%",
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <View
              style={{
                marginBottom: 40,
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <PressableCircle
                buttonText="2"
                onPressCallBack={onPressCallBack}
              />
              <PressableCircle
                buttonText="4"
                onPressCallBack={onPressCallBack}
              />
              <PressableCircle
                buttonText="8"
                onPressCallBack={onPressCallBack}
              />
              <PressableCircle
                buttonText="16"
                onPressCallBack={onPressCallBack}
              />
            </View>
          </View>
          <Text style={styles.text}>LOBBY NAME</Text>
          <InputBox placeholder="Lobbies Name" />
          <Text style={styles.text}>MAX MATCH VICTORIES</Text>
          <InputBox placeholder="Number" />
          <View style={{ marginTop: 65 }}>
            <PressableButton buttonText="CREATE" onPressCallBack={changePage} />
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
    height: "100%",
    backgroundColor: "#CFE9FD",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginTop: 60,
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

export default ModalCustom;
