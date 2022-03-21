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
import Collapse from "../../components/ui/collapse/Collapse";
import PressableButton from "../../components/ui/PressableButton";

const Tournament = (props) => {
  const [loaded] = useFonts({
    Toons: require("../../assets/fonts/Mikey.ttf"),
    Sponge: require("../../assets/fonts/Sponge.ttf"),
  });

  let navigate = useNavigate();
  const changePage = (e) => {
    navigate(`/game`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        {/* {_renderModalContent()} */}
        <Text style={styles.title}>LOBBY</Text>
        <Text style={styles.text}>LOBBY NAME</Text>
        <ScrollView style={{ height: "60%" }}>
          <View>
            <Collapse title="FASE1" />
          </View>
          <View>
            <Collapse title="FASE1" />
          </View>
          <View>
            <Collapse title="FASE1" />
          </View>
          <View>
            <Collapse title="FASE1" />
          </View>
        </ScrollView>
        <PressableButton
          position={{ bottom: 100, right: 80 }}
          buttonText="play"
          onPressCallBack={changePage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#CFE9FD",
  },
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
    width: "100%",
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

export default Tournament;
