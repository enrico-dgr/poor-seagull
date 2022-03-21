import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
// STYLE
import { useFonts } from "expo-font";
const CardLobby = (props) => {
  const [loaded] = useFonts({
    Toons: require("../../../assets/fonts/Mikey.ttf"),
    Sponge: require("../../../assets/fonts/Sponge.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const changePageCallback = (e) => {
    props.changePageCallback();
  };
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Text style={styles.text}>Players: {props.nPlayers}</Text>
      <Text style={styles.text}>Creator: {props.creator}</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable
          onPress={changePageCallback}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#6B9DFA" : "#567df7",
            },
            styles.buttonContainer,
          ]}
        >
          <Text style={styles.textPress}>{props.button}</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "white",
    color: "white",
    shadowColor: "grey",
    borderColor: "#66737D",
    shadowOpacity: 4,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    alignItems: "center",
  },
  title: {
    fontFamily: "Toons",
    marginVertical: 15,
    textAlign: "center",
    fontSize: 25,
    color: "grey",
  },
  titleContainer: {
    height: 50,
    width: "100%",
  },
  text: {
    fontFamily: "Toons",
    marginHorizontal: 25,
    marginVertical: 8,
    fontSize: 25,
    color: "#41637D",
  },
  textPress: {
    fontFamily: "Toons",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
    color: "yellow",
  },
  buttonContainer: {
    marginTop: 7,
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default CardLobby;
