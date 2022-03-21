import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

import PressableButton from "../PressableButton";
import PressableCircle from "../PressableCircle";
const Collapse = (props) => {
  const [state, setState] = useState(false);

  // const [loaded] = useFonts({
  //   Toons: require("../../assets/fonts/Mikey.ttf"),
  //   Sponge: require("../../assets/fonts/Sponge.ttf"),
  // });
  // if (!loaded) {
  //   return null;
  // }
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      playerOne: "pippo",
      playerTwo: "pluto",
      playerOneScore: 3,
      playerTwoScore: 2,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      playerOne: "ciccio",
      playerTwo: "lello",
      playerOneScore: 3,
      playerTwoScore: 2,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      playerOne: "pumba",
      playerTwo: "timon",
      playerOneScore: 3,
      playerTwoScore: 2,
    },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: 50,
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 10,
        padding: 8,
      }}
    >
      <Text style={styles.text}>
        {item.playerOne} - {item.playerTwo}
      </Text>
      <Text style={styles.text}>
        {item.playerOneScore} - {item.playerTwoScore}
      </Text>
      {/* <PressableCircle buttonText="GO" onPressCallBack={changePage} /> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <PressableButton
        onPressCallBack={() => setState(!state)}
        buttonText={props.title}
      />
      {state && (
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#CFE9FD",
    marginTop: 15,
    // justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,

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
    fontSize: 20,
  },
});

export default Collapse;
