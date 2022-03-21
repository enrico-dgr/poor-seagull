import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import CardLobby from "../../components/ui/lobbyCard/CardLobby";
import ModalCustom from "../../components/ui/modal/ModalCustom";
import PressableButton from "../../components/ui/PressableButton";
import { useNavigate } from "react-router-dom";
const LobbyList = () => {
  const [state, setState] = useState({
    visibleModal: false,
  });
  const [loaded] = useFonts({
    Toons: require("../../assets/fonts/Mikey.ttf"),
    Sponge: require("../../assets/fonts/Sponge.ttf"),
  });
  let navigate = useNavigate();
  const changePage = (e) => {
    navigate(`/tournament`);
  };
  return (
    <View style={{ backgroundColor: "#CFE9FD", height: "100%", width: "100%" }}>
      <Text style={styles.title}>LOBBIES LIST</Text>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <PressableButton
          onPressCallBack={() => {
            setState({ visibleModal: true });
          }}
          buttonText="NEW"
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
          <CardLobby
            title="TITLE"
            creator="Pippo"
            nPlayers="15"
            button="ENTER"
            changePageCallback={changePage}
          />
        </View>
      </ScrollView>

      <ModalCustom
        state={state.visibleModal}
        onPressCallBack={() => setState({ visibleModal: false })}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "80%",
    backgroundColor: "#CFE9FD",
  },
  title: {
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
    fontSize: 50,
    fontFamily: "Toons",
  },
});

export default LobbyList;
