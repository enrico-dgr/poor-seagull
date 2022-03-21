import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const PressableButton = (props) => {
  const onPressCallBack = (e) => {
    props.onPressCallBack();
  };
  return (
    <Pressable
      onPress={onPressCallBack}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#6B9DFA" : "#567df7",
        },
        styles.buttonContainer,
      ]}
    >
      <Text style={styles.buttonStart}>{props.buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 40,
    height: 50,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonStart: {
    fontFamily: "Toons",
    color: "white",
    fontSize: 30,
  },
});

export default PressableButton;
