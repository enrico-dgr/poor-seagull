import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useFonts } from "expo-font";
const InputBox = (props) => {
  const [loaded] = useFonts({
    Toons: require("../../assets/fonts/Mikey.ttf"),
    Sponge: require("../../assets/fonts/Sponge.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor="#000"
      //   onChangeText={onChangeText}
      //   value={text}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "grey",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderColor: "transparent",
    borderRadius: 10,
    fontFamily: "Sponge",
  },
});
export default InputBox;
