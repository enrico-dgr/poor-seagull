import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const CardRules = (props) => {
  return (
    <ImageBackground
      source={props.imageBg}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{props.ruleTitle}</Text>
        <Image style={styles.slideContainer} source={props.ruleImage} />
        <Text style={styles.text}>{props.textOne}</Text>
        <Text style={styles.text}>{props.textTwo}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    marginRight: 50,
    width: 305,
    height: 259,
  },
  text: {
    marginTop: 20,
    fontFamily: "Sponge",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 20,
    color: "blue",
  },
  title: {
    fontFamily: "Toons",
    fontSize: 50,
  },
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, 0.4)",
    opacity: 1,
  },
});

export default CardRules;
