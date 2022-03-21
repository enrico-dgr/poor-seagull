import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Swiper from "react-native-web-swiper";
import InputBox from "../../components/ui/InputBox";
import PressableButton from "../../components/ui/PressableButton";
// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// STYLE
import { useFonts } from "expo-font";

const Role = () => {
  let navigate = useNavigate();
  const [loaded] = useFonts({
    Toons: require("../../assets/fonts/Mikey.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const changePage = (e) => {
    navigate(`/lobbylist`);
  };
  return (
    <View style={styles.container}>
      <Swiper>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Text>Game Roles 1</Text>
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <Text>Game Roles 2</Text>
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Text>Input Name</Text>
          <InputBox placeholder="Your Username" />
          <PressableButton onPressCallBack={changePage} buttonText="ENTER" />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
});

export default Role;
