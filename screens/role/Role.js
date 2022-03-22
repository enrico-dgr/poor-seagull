import React from "react";

// rn
import { StyleSheet, Text, View } from "react-native";

// components
import Swiper from "react-native-web-swiper";
import InputBox from "../../components/ui/InputBox";
import PressableButton from "../../components/ui/PressableButton";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

// STYLE
import { useFonts } from "expo-font";

// redux
import { connect } from "react-redux";

// websocket
import gameWss from "../../services/gameWss";
import CardRules from "../../components/ui/cardRules/CardRules";
// Images
import SeagulOne from "../../assets/seagul/seagull1.png";
import SeagulTwo from "../../assets/seagul/seagull2.png";
import SeaOne from "../../assets/seagul/sea1.jpeg";
import SeaTwo from "../../assets/seagul/sea2.jpeg";

const Role = (props) => {
  let navigate = useNavigate();
  const [state, setState] = React.useState({
    username: "",
  });
  const [loaded] = useFonts({
    Toons: require("../../assets/fonts/Mikey.ttf"),
  });

  const onChangeText = (text) =>
    setState((prev) => ({ ...prev, username: text }));

  const sendNameToWss = () => {
    setState((prev) => {
      gameWss.send(
        JSON.stringify({
          channel: "USER",
          action: {
            type: "SET_DATA",
            payload: {
              name: prev.username,
            },
          },
        })
      );
      return prev;
    });
  };
  React.useEffect(() => {
    console.log(state.username);
    if (props.name === state.username) {
      navigate(`/lobbylist`);
    }
  }, [props.name, state.username]);

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Swiper>
        <View style={[styles.slideContainer, styles.slide1]}>
          <CardRules
            ruleTitle="Welcome"
            textOne="Lorem Ipsum is simply dummy text of  "
            textTwo="Lorem Ipsum is simply dummy text of "
            ruleImage={SeagulOne}
            imageBg={SeaOne}
          />
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <CardRules
            ruleTitle="Rules"
            textOne="Lorem Ipsum is simply dummy text of "
            textTwo="Lorem Ipsum is simply dummy text of "
            ruleImage={SeagulTwo}
            imageBg={SeaTwo}
          />
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Text style={styles.text}>Input Username</Text>
          <InputBox placeholder="Username" onChangeText={onChangeText} />
          <PressableButton onPressCallBack={sendNameToWss} buttonText="ENTER" />
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
  text: {
    fontFamily: "Toons",
    fontSize: 20,
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

const mapStateToProps = (state) => ({ name: state.user.name });

export default connect(mapStateToProps)(Role);
