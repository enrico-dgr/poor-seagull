import React from "react";
// STYLE
import { useFonts } from "expo-font";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// RN COMPONENTS
import { View, StyleSheet, Text } from "react-native";
import Swiper from "react-native-web-swiper";
import VideoBackground from "../../components/ui/videoBackground/VideoBackground";
import PressableButton from "../../components/ui/PressableButton";
import PressableCircle from "../../components/ui/PressableCircle";
import { Paper } from "../../assets/icon/newspaper.png";

const Game = () => {
  let navigate = useNavigate();
  const [loaded] = useFonts({
    Toons: require("../../assets/fonts/Mikey.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const changePage = (e) => {
    navigate(`/Role`);
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>SELECT YOUR MOVE</Text>
        <View style={{ height: 500, width: "100%" }}>
          <Swiper
            vertical
            // loop
            // timeout={-2.5}
            controlsProps={{
              dotActiveStyle: { backgroundColor: "red" },
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,20,200,0.3)",
              }}
            >
              {Paper}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,200,20,0.3)",
              }}
            >
              <PressableCircle buttonText="PAPER" />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(200,20,20,0.3)",
              }}
            >
              <PressableCircle buttonText="SCISSOR" />
            </View>
          </Swiper>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexGrow: 1,
    marginTop: 5,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Toons",
    fontSize: 40,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: "Toons",
    fontSize: 30,
    color: "blue",
  },
});

export default Game;
